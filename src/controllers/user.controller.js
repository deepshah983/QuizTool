import User from "../models/user.model.js";
import sendEmail from "../utils/email.js";
import bcrypt from "bcryptjs";

// Create a new user
export const createUser = async (req, res) => {
  const { employ_id, name, email, mobile, position, department } = req.body;

  // Generate a random password
  const password = Math.random().toString(36).slice(-8);

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const user = await User.create({
      employ_id,
      name,
      email,
      mobile,
      position,
      department,
      password: hashedPassword,
    });

    const message = `Welcome to our platform! Your login details are as follows:
      Email: ${email}
      Password: ${password}`;

    await sendEmail({
      email: user.email,
      subject: "Welcome to Our Platform",
      message,
    });

    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

// Read all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

// Read a single user
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching user" });
  }
};

// Update a user
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Error updating user" });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user" });
  }
};
