import express from "express";
import {
  loginUserCtrl,
  profileUserCtrl,
  deleteUserCtrl,
  updateUserCtrl,
} from "../../controllers/users/userCtrl.js";
import createUser from "../../controllers/users/create.js";
import readAllUsers from "../../controllers/users/read.js";
const usersRoute = express.Router();

// REFACTOR CODE using express router MIDDLEWARE
// POST/api/v1/users/register
usersRoute.post("/register", createUser);

// POST/api/v1/users/login
usersRoute.post("/login", loginUserCtrl);

// GET/api/v1/users/profile/:id
usersRoute.get("/profile/:id", readAllUsers);

// DELETE/api/v1/users/:id
usersRoute.delete("/:id", deleteUserCtrl);

// PUT/api/v1/users/:id - updating profile
usersRoute.put("/:id", updateUserCtrl);

export default usersRoute;
