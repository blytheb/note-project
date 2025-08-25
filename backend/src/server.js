import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/noteRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(cors({
    origin: "http://localhost:5173/api/notes",
}));
app.use(express.json()); //this middleware will parse JSON bodies: req.body
// app.use(rateLimiter);


app.use("/api/notes", notesRoutes);

connectDB().then(()=> {
    app.listen(5001, () => {
    console.log("Server started on Port:",PORT);
    });
})




