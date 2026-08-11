"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// Route Parameter
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`
        <h1>User Profile</h1>
        <p>You are viewing the profile for User ID: <strong>${userId}</strong></p>
    `);
});
// Multiple Route Parameters
app.get("/flights/:from/:to", (req, res) => {
    const { from, to } = req.params;
    res.send(`
            Searching for flights departing from <b>${from}</b>
            arriving at <b>${to}</b>.
        `);
});
// Query Parameters
app.get("/search", (req, res) => {
    const { category, sort } = req.query;
    res.json({
        message: "Search Results",
        filteringBy: category || "None",
        sortingBy: sort || "Default"
    });
});
// Start Server
app.listen(PORT, () => {
    console.log(`Dynamic server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=dynamicapp.js.map