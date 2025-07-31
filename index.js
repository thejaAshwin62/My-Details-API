import express from "express";
import dotenv from "dotenv";
dotenv.config();
import errorHandlerMiddleware from "./middleware/error-handler.js";
import myDetailsRoute from "./route/myDetails.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(errorHandlerMiddleware);
app.use(cookieParser());
const port = process.env.PORT;
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/v1", myDetailsRoute);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});
