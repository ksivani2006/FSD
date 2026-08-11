import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Route Parameter
app.get("/user/:id", (req: Request<{ id: string }>, res: Response) => {
    const userId = req.params.id;

    res.send(`
        <h1>User Profile</h1>
        <p>You are viewing the profile for User ID: <strong>${userId}</strong></p>
    `);
});

// Multiple Route Parameters
app.get(
    "/flights/:from/:to",
    (
        req: Request<{ from: string; to: string }>,
        res: Response
    ) => {
        const { from, to } = req.params;

        res.send(`
            Searching for flights departing from <b>${from}</b>
            arriving at <b>${to}</b>.
        `);
    }
);

// Query Parameters
app.get(
    "/search",
    (
        req: Request<{}, {}, {}, { category?: string; sort?: string }>,
        res: Response
    ) => {
        const { category, sort } = req.query;

        res.json({
            message: "Search Results",
            filteringBy: category || "None",
            sortingBy: sort || "Default"
        });
    }
);

// Start Server
app.listen(PORT, () => {
    console.log(`Dynamic server running at http://localhost:${PORT}`);
});