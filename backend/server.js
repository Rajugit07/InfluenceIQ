import express from "express";
import connectDB from "./database/db.js";
import userRoutes from "./routes/user.route.js";

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json()); // Body parser

//api routes
app.use("/api/user", userRoutes); // User routes

// Basic route
app.get("/", (req, res) => {
    res.send("Server is running...");
});

// Start server
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});
