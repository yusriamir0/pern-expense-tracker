import express from "express";
import createUser from "../../controllers/users/register.js";
import updateUserCtrl from "../../controllers/users/update.js";
import deleteUserCtrl from "../../controllers/users/delete.js";
import readAllUsers from "../../controllers/users/readAllUsers.js";
import loginUser from "../../controllers/users/login.js";
import isAuth from "../../middlewares/isAuth.js";
import appErr from "../../utils/appErr.js";
import readUserByParam from "../../controllers/users/readUserParam.js";
import readUserToken from "../../controllers/users/readUserToken.js";

const usersRoute = express.Router();

// REFACTOR CODE using express router MIDDLEWARE
// POST/api/v1/users/register
usersRoute.post("/register", createUser);

// POST/api/v1/users/login
usersRoute.post("/login", loginUser);

// GET/api/v1/users/profile/ ALL Users
usersRoute.get("/profile", readAllUsers);

// GET/api/v1/users/profile/ SINGLE User
usersRoute.get("/profile/single", isAuth, readUserToken);

// GET/api/v1/users/profile/:id SINGLE Users
usersRoute.get("/profile/:id", isAuth, readUserByParam);

// DELETE/api/v1/users/:id
usersRoute.delete("/", isAuth, deleteUserCtrl);

// PUT/api/v1/users/ - updating profile
usersRoute.put("/", isAuth, updateUserCtrl);

// GET profile - error handling ROUTES
const app = express();
usersRoute.get("/error", (req, res, next) => {
  const isNetworkLive = false;
  if (!isNetworkLive) {
    const err = appErr("Wrong Network", 401, "Invalid");
    return next(err);
  }
  res.json({ message: "Welcome to error handling" });
});

usersRoute.get("/error/profile", (req, res, next) => {
  const isLogin = true;
  if (!isLogin) {
    const err = appErr("Anda belum login", 501, "Invalid");
    return next(err);
  }
  res.json({ message: "Welcome to profile" });
});

// Catch-all route for undefined routes
usersRoute.all("*", (req, res) => {
  res.status(404).json({ message: `${req.originalUrl} url tak jumpa` });
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
