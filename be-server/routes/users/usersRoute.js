import express from "express";
import createUser from "../../controllers/users/register.js";
import updateUserCtrl from "../../controllers/users/update.js";
import deleteUserCtrl from "../../controllers/users/delete.js";
import readUserById from "../../controllers/users/readUser.js";
import readAllUsers from "../../controllers/users/readAllUsers.js";
import loginUser from "../../controllers/users/login.js";
import isAuth from "../../middlewares/isAuth.js";
import appErr from "../../utils/appErr.js";

const usersRoute = express.Router();

// REFACTOR CODE using express router MIDDLEWARE
// POST/api/v1/users/register
usersRoute.post("/register", createUser);

// POST/api/v1/users/login
usersRoute.post("/login", loginUser);
usersRoute.get("/login", isAuth, loginUser);

// GET/api/v1/users/profile/ ALL Users
usersRoute.get("/profile", isAuth, readAllUsers);

// GET/api/v1/users/profile/:id SINGLE Users
usersRoute.get("/profile/:id", readUserById);

// DELETE/api/v1/users/:id
usersRoute.delete("/:id", deleteUserCtrl);

// PUT/api/v1/users/:id - updating profile
usersRoute.put("/:id", updateUserCtrl);

// GET profile - error handling ROUTES
const app = express();
usersRoute.get("/error", (req, res, next) => {
  const isNetworkLive = false;
  if (!isNetworkLive) {
    const err = appErr("Network salah", 401, "Invalid");
    return next(err);
  }
  res.json({ message: "Welcome to error handling" });
});

usersRoute.get("/error/profile", (req, res, next) => {
  const isLogin = false;
  if (!isLogin) {
    const err = appErr("Anda belum login", 501, "Invalid");
    return next(err);
  }
  res.json({ message: "Welcome to profile" });
});

// Catch-all route for undefined routes
usersRoute.all("*", (req, res, next) => {
  res.status(404).json({ message: `${req.originalUrl} not found` });
  return;
});

// Middleware for handling errors
const handleErrors = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: err.status,
    statusCode: err.statusCode,
    message: err.message,
  });
  return;
};

// Global error handler
usersRoute.use(handleErrors);

export default usersRoute;
