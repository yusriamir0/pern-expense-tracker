import express from "express";
import {
  createAccountCtrl,
  updateAccountCtrl,
  deleteAccountCtrl,
  singleAccountCtrl,
  allAccountCtrl,
} from "../../controllers/accounts/accountCtrl.js";

const accountsRoute = express.Router();

// REFACTOR CODE using express router for MIDDLEWARE
// POST /api/v1/accounts
accountsRoute.post("/", createAccountCtrl);
  
// GET/api/v1/accounts/:id - single
accountsRoute.get("/:id", singleAccountCtrl);

// GET/api/v1/accounts - all
accountsRoute.get("/", allAccountCtrl);

// DELETE/api/v1/accounts
accountsRoute.delete("/:id", deleteAccountCtrl);

// PUT/api/v1/accounts
accountsRoute.put("/:id", updateAccountCtrl);

export default accountsRoute;
