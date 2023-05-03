import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import "express-async-errors";
import connectDb from "./db/connectDb.js";
import uploadRouter from "./routes/uploadRoutes.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import multer from "multer";
import { nanoid } from "nanoid";
import path from "path";
import bodyParser from "body-parser";
import jwtChecker from "./middleware/jwtChecker.js";
import cors from "cors";

const app = express();

app.use(cors()); // Use this after the variable declaration
app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);
dotenv.config();
const PORT = process.env.PORT_NO || 6000;
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.static("./public"));
app.use("/api/v1/upload", jwtChecker, uploadRouter);

app.use(errorHandlerMiddleware);

app.listen(PORT, () => console.log(`server is running ${PORT}`));

const start = async () => {
  try {
    const connect = await connectDb(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};
start();
