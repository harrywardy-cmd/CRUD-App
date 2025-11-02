import express from "express";
import {
  create,
  getAllUsers,
  getUserByID,
  update,
  deleteUser,
  login,
} from "../controller/userController.js";

import { verifyToken, verifyAdmin } from "../middleware/auth.js"; // add verify Admin

const route = express.Router();

// Public routes
route.post("/user", create); // signup
route.post("/login", login); // login

// Protected routes

// Only admin can get all users
route.get("/users", verifyToken, getAllUsers);

// Any logged-in user can get their own info
route.get("/user/:id", verifyToken, getUserByID);

// Users can update their own info, admins can update anyone
route.put("/update/user/:id", verifyToken, update);

// Only admin can delete a user
route.delete("/delete/user/:id", verifyToken, verifyAdmin, deleteUser);

export default route;