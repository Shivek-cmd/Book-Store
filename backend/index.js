import express from "express";
import dotenv from "dotenv";
import connectdb from "./config/connectdb.js";
import bookRoute from "../backend/routes/bookRoute.js";
import cors from "cors";

dotenv.config();
connectdb();

const app = express();
app.use(cors());
const port = process.env.PORT || 4000;

app.use("/", bookRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//2:48:57
