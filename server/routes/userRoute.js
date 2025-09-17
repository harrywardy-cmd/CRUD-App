import express from "express";

import {create, getAllUsers, getUserByID} from "../controller/userController.js";

const route = express.Router();

route.post("/user", create);
route.get("/users",getAllUsers)
route.get("/user/:id",getUserByID)

export default route;