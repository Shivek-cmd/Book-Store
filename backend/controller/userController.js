import User from "../models/userModel.js";
import bcrypt from "bcrypt";
export const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if any required fields are missing
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // Return success response
    res.status(201).json({
      message: "User created successfully.",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (err) {
    // Handle any errors that occur during user creation or saving
    console.error("Error signing up:", err);
    res
      .status(500)
      .json({ message: "Failed to sign up. Please try again later." });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // If login successful, return a success response with user details
    res.status(200).json({
      message: "Login successful",
      user: { _id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
