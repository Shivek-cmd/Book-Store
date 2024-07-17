import Book from "../models/bookmodel.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    console.error("Error getting books:", err);
    res.status(500).json({ message: "Failed to retrieve books" });
  }
};
