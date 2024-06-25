import express from "express";
import createUser from "../../controllers/users/create.js";
import updateUserCtrl from "../../controllers/users/update.js";
import deleteUserCtrl from "../../controllers/users/delete.js";
import readUserById from "../../controllers/users/readUser.js";
import readAllUsers from "../../controllers/users/readAllUsers.js";

const usersRoute = express.Router();

// REFACTOR CODE using express router MIDDLEWARE
// POST/api/v1/users/register
usersRoute.post("/register", createUser);

// POST/api/v1/users/login
usersRoute.post("/login");

// GET/api/v1/users/profile/ ALL Users
usersRoute.get("/profile", readAllUsers);

// GET/api/v1/users/profile/:id SINGLE Users
usersRoute.get("/profile/:id", readUserById);

// DELETE/api/v1/users/:id
usersRoute.delete("/:id", deleteUserCtrl);

// PUT/api/v1/users/:id - updating profile
usersRoute.put("/:id", updateUserCtrl);

export default usersRoute;
