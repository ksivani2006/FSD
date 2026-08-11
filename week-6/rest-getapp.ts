import express, { Request, Response } from "express";

const app = express();
const PORT: number = 3000;

// Middleware to parse JSON
app.use(express.json());

/**
 * 1. BASIC JSON RESPONSE
 */
app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Welcome to our API!",
        status: "Active",
        timestamp: new Date()
    });
});

/**
 * 2. SENDING AN ARRAY OF OBJECTS
 */
app.get("/students", (req: Request, res: Response) => {
    const studentList = [
        { id: 101, name: "Alice", course: "MERN Stack" },
        { id: 102, name: "Bob", course: "Data Science" },
        { id: 103, name: "Charlie", course: "UI/UX" }
    ];

    res.json(studentList);
});

/**
 * 3. DYNAMIC JSON RESPONSE
 * URL Example: http://localhost:3000/product/45
 */
app.get("/product/:id", (req: Request, res: Response) => {
    const productId: string = req.params.id;

    res.json({
        requestedId: productId,
        category: "Electronics",
        inStock: true,
        tags: ["gadget", "new-arrival"]
    });
});

/**
 * Start the server
 */
app.listen(PORT, () => {
    console.log(`JSON Server is running at http://localhost:${PORT}`);
});