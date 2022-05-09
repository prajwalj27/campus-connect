import express from "express";
import "dotenv/config";
import cors from "cors";

import "./config/db.js"
import usersRoutes from "./routes/users.js"
import postsRoutes from "./routes/posts.js"

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors())

app.use("/api/users", usersRoutes)
app.use("/api/posts", postsRoutes)

app.get("/", (req, res) => {
  res.send("Welcome to Campus Connect!");
});

// app.all("*", (req, res) => {
//   res.send("<h1>404 Not Found</h1>No such URL exists");
// });

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
