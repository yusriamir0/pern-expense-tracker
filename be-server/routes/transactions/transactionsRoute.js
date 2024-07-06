import express from "express";
import createTransaction from "../../controllers/transactions/create.js";
import readAllTransactions from "../../controllers/transactions/readAllTransactions.js";
import deleteTransactionCtrl from "../../controllers/transactions/delete.js";
import updateTransactionCtrl from "../../controllers/transactions/update.js";
import isAuth from "../../middlewares/isAuth.js";

const transactionsRoute = express.Router();

// REFACTOR CODE using express router for MIDDLEWARE

// POST/api/v1/transactions
transactionsRoute.post("/", createTransaction);

// GET/api/v1/transactions/:id ALL
transactionsRoute.get("/", isAuth, readAllTransactions);

// GET/api/v1/transactions/:id SINGLE
// transactionsRoute.get("/:id", readTransactionById);

// DELETE/api/v1/transactions/:id
transactionsRoute.delete("/:id", deleteTransactionCtrl);

// PUT/api/v1/transactions/:id
transactionsRoute.put("/:id", updateTransactionCtrl);

export default transactionsRoute;
