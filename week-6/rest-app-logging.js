"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
/**
 * 1. BUILT-IN MIDDLEWARE
 */
app.use(express_1.default.json());
/**
 * 2. CUSTOM LOGGING MIDDLEWARE
 */
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] Incoming Request: ${req.method} ${req.url}`);
    next();
});
/**
 * 3. CUSTOM SECURITY MIDDLEWARE
 */
app.use((req, res, next) => {
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
 * Mock Database
 */
let tasks = [
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Master REST APIs" }
];
/**
 * GET - Read all tasks
 */
app.get("/tasks", (req, res) => {
    res.json(tasks);
});
/**
 * POST - Create a new task
 */
app.post("/tasks", (req, res) => {
    const newTask = {
        id: req.body.id != null ? Number(req.body.id) : tasks.length + 1,
        title: req.body.title
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});
/**
 * PUT - Update a task
 */
app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.title = req.body.title;
        res.json({
            message: "Task updated successfully",
            task
        });
    }
    else {
        res.status(404).json({
            error: "Task not found"
        });
    }
});
/**
 * DELETE - Remove a task
 */
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
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
