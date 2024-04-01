import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; //para manipular variables de entorno, la contraseña, en un archivo a parte
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config(); /* lo uso para el archivo env donde tengo el link seguro de la DB de mongoDB */

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

const app = express();

/* middleware para permitir los input en json */
app.use(express.json());

//para el uso de las cookies
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
