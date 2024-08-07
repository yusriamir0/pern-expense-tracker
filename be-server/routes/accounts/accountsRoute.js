import express from "express";
import isAuth from "../../middlewares/isAuth.js";
import createAccountCtrl from "../../controllers/accounts/create.js";
import readAllAccounts from "../../controllers/accounts/readAllAccount.js";
import readSingleAccount from "../../controllers/accounts/readSingleAccount.js";
import updateAccountCtrl from "../../controllers/accounts/update.js";
import deleteAccountCtrl from "../../controllers/accounts/delete.js";

const accountsRoute = express.Router();

// REFACTOR CODE using express router for MIDDLEWARE
// POST /api/v1/accounts
accountsRoute.post("/", isAuth, createAccountCtrl);

// GET/api/v1/accounts - all
accountsRoute.get("/", readAllAccounts);

// GET/api/v1/accounts/:id - single
accountsRoute.get("/single", isAuth, readSingleAccount);
// DELETE/api/v1/accounts
accountsRoute.delete("/", isAuth, deleteAccountCtrl);

// PUT/api/v1/accounts
accountsRoute.put("/", isAuth, updateAccountCtrl);

export default accountsRoute;
