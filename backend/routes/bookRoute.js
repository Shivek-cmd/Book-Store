import express from "express";
import { getBooks } from "../controller/bookController.js";

const router = express.Router();

router.get("/book", getBooks);

export default router;
