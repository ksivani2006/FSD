import express, { Request, Response, NextFunction } from "express";

const app = express();
const PORT: number = 3000;

/**
 * 1. BUILT-IN MIDDLEWARE
 */
app.use(express.json());

/**
 * 2. CUSTOM LOGGING MIDDLEWARE
 */
app.use((req: Request, res: Response, next: NextFunction): void => {
    const timestamp: string = new Date().toLocaleString();

    console.log(
        `[${timestamp}] Incoming Request: ${req.method} ${req.url}`
    );

    next();
});

/**
 * 3. CUSTOM SECURITY MIDDLEWARE
 */
app.use((req: Request, res: Response, next: NextFunction): void => {
    const userAgent = req.get("User-Agent");

    if (!userAgent) {
        res.status(400).json({
            error: "Browser identification missing"
        });
        return;
    }

    next();
});

/**
 * Task Interface
 */
interface Task {
    id: number;
    title: string;
}

/**
 * Mock Database
 */
let tasks: Task[] = [
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Master REST APIs" }
];

/**
 * GET - Read all tasks
 */
app.get("/tasks", (req: Request, res: Response) => {
    res.json(tasks);
});

/**
 * POST - Create a new task
 */
app.post("/tasks", (req: Request, res: Response) => {

    const newTask: Task = {
        id: req.body.id != null ? Number(req.body.id) : tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

/**
 * PUT - Update a task
 */
app.put("/tasks/:id", (req: Request, res: Response) => {

    const id: number = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (task) {
        task.title = req.body.title;

        res.json({
            message: "Task updated successfully",
            task
        });
    } else {
        res.status(404).json({
            error: "Task not found"
        });
    }
});

/**
 * DELETE - Remove a task
 */
app.delete("/tasks/:id", (req: Request, res: Response) => {

    const id: number = parseInt(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.json({
        message: `Task ${id} deleted`,
        remainingTasks: tasks
    });
});

/**
 * Start Server
 */
app.listen(PORT, () => {
    console.log(`REST API Server running at http://localhost:${PORT}`);
});