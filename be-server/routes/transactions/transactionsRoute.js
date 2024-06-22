import express from "express";
import {
  createTransactionCtrl,
  singleTransactionCtrl,
  allTransactionCtrl,
  deleteTransactionCtrl,
  updateTransactionCtrl,
} from "../../controllers/transactions/transactionCtrl.js";
const transactionsRoute = express.Router();

// REFACTOR CODE using express router for MIDDLEWARE

// POST/api/v1/transactions
transactionsRoute.post("/", createTransactionCtrl);

// GET/api/v1/transactions/:id ALL
transactionsRoute.get("/", allTransactionCtrl);

// GET/api/v1/transactions/:id SINGLE
transactionsRoute.get("/:id", singleTransactionCtrl);

// DELETE/api/v1/transactions/:id
transactionsRoute.delete("/:id", deleteTransactionCtrl);

// PUT/api/v1/transactions/:id
transactionsRoute.put("/:id", updateTransactionCtrl);
export default transactionsRoute;
