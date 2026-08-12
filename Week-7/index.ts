import express from "express";

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", {
        title: "User Registration",
        error: null,
        user: null
    });
});

app.post("/register", (req, res) => {
    const { username, age } = req.body;

    if (!username || !age) {
        return res.render("index", {
            title: "User Registration",
            error: "Please enter username and age.",
            user: null
        });
    }

    res.render("index", {
        title: "User Registration",
        error: null,
        user: username
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});