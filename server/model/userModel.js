import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // ensures no duplicate emails
  },
  address: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["user", "admin"], // possible roles
    default: "user"          // default role for new users
  }
}, { timestamps: true }); // optional: tracks createdAt and updatedAt

export default mongoose.model("Users", userSchema);