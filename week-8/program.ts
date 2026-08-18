import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";



declare module "express-session" {
    interface SessionData {
        isLoggedIn?: boolean;
        username?: string;
    }
}

const app = express();

// Configure EJS
app.set("view engine", "ejs");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Maintain Sessions
app.use(
    session({
        secret: "my-secret-key",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000
        }
    })
);

// Protect private routes
const authMiddleware = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {

    if (req.session.isLoggedIn) {
        next();
    } else {
        res.redirect("/login");
    }
};

// Public Route: Login Page
app.get("/login", (req, res) => {
    res.render("login", { error: null });
});

// Implement Login
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    // Basic hardcoded login
    // Username: admin
    // Password: 123
    if (username === "admin" && password === "123") {

        req.session.isLoggedIn = true;
        req.session.username = username;

        // Create a custom cookie
        res.cookie("lastVisit", new Date().toLocaleTimeString());

        res.redirect("/dashboard");

    } else {

        res.render("login", {
            error: "Invalid credentials!"
        });

    }
});

// Private Route: Dashboard
app.get("/dashboard", authMiddleware, (req, res) => {

    // Read cookie
    const lastVisit = req.cookies.lastVisit || "First time!";

    res.render("dashboard", {
        user: req.session.username,
        lastVisit: lastVisit
    });
});

// Implement Logout
app.get("/logout", (req, res) => {

    req.session.destroy(() => {

        res.clearCookie("connect.sid");

        res.redirect("/login");

    });
});

// Start server
app.listen(3000, () => {
    console.log("Server: http://localhost:3000/login");
});
