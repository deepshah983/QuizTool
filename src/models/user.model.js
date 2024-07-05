import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  employ_id: {
    type: String,
    required: [true, "Please tell us your Employee ID!"],
  },
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  mobile: {
    type: Number,
    required: [true, "Please tell us your Mobile Number!"],
  },
  position: {
    type: Number,
    required: [true, "Please add position"],
  },
  department: {
    type: Number,
    required: [true, "Please add respective department"],
  },
  password: {
    type: String,
    // required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  photo: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },

  passwordChangedAt: Date,
});

const User = mongoose.model("Users", userSchema);
export default User;

