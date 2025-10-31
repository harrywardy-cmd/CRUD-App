import express from "express";
import {
  create,
  getAllUsers,
  getUserByID,
  update,
  deleteUser,
  login,
} from "../controller/userController.js";

import { verifyToken } from "../middleware/auth.js"; // ⬅️ optional (for protected routes)

const route = express.Router();

// ✅ Auth routes
route.post("/user", create); // signup
route.post("/login", login);     // login

// ✅ CRUD routes (you can protect these later)
route.get("/users", getAllUsers);
route.get("/user/:id", getUserByID);
route.put("/update/user/:id", update);
route.delete("/delete/user/:id", deleteUser);

export default route;