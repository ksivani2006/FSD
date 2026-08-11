"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// Home Route
app.get("/", (req, res) => {
    res.send("<h1>Welcome SVECW!</h1><p>You have reached the Home Page</p>");
});
// About Route
app.get("/about", (req, res) => {
    res.send("This server was built as a learning exercise for Express.js by SVECW AI Department.");
});
// API Route
app.get("/api/status", (req, res) => {
    res.json({
        active: true,
        version: "1.0.0",
        message: "The server is healthy and responding!"
    });
});
// Start Server
app.listen(PORT, () => {
    console.log(`Success! Server is running at http://localhost:${PORT}`);
    console.log("Press CTRL+C to stop the server.");
});
//# sourceMappingURL=app1.js.map