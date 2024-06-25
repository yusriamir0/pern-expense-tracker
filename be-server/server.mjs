import express from "express";
import usersRoute from "./routes/users/usersRoute.js";
import accountsRoute from "./routes/accounts/accountsRoute.js";
import transactionsRoute from "./routes/transactions/transactionsRoute.js";
import "./config/connection.js ";
import cors from "cors";
import { databaseConnect } from "./config/connection.js";

const app = express();
const PORT = 3000;

// Testing for environment variables
const TEST = process.env.TEST;
console.log("Testing:", TEST);

// MIDDLEWARE
// CORS cross-origin resources sharing
app.use(cors());
// allow and parse app/json to access req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize database connection and execute DDL queries
databaseConnect();

// *ROUTES - CRUD
// * USER routes
app.use("/api/v1/users", usersRoute);

// * ACCOUNT ROUTES
app.use("/api/v1/accounts", accountsRoute);

// * TRANSACTION ROUTES
app.use("/api/v1/transactions", transactionsRoute);

// error handlers
app.use((req, res) => {
  res.status(404).json({ msg: "Page not found" });
});
app.use((err, req, res) => {
  res.status(500).json({ msg: "Something went wrong" });
});

// listen to the server
app.listen(PORT, () => console.log(`This server is running at PORT ${PORT}`));

// http://localhost:3000/api/v1/users
