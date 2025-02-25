import express from "express";
import mongoose from "mongoose";
import problemRouter from "./routes/problems.js";

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://0.0.0.0/moes")
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/problems", problemRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
