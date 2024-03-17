import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); /* lo uso para el archivo env donde tengo el link seguro de la DB de mongoDB */

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
