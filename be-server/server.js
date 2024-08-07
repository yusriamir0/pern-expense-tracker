import express from "express";
import usersRoute from "./routes/users/usersRoute.js";
import transactionsRoute from "./routes/transactions/transactionsRoute.js";
import "./config/connection.js ";
import { databaseConnect } from "./config/connection.js";
import globalErrHandler from "./middlewares/globalErrHandler.js";
import accountsRoute from "./routes/accounts/accountsRoute.js";

const app = express();

// MIDDLEWARE
// allow and parse app/json to access req.body
app.use(express.json()); // backend interaction
app.use(express.urlencoded({ extended: true })); // frontend interaction

// Initialize database connection and execute DDL queries
databaseConnect();

// *ROUTES - CRUD
// * USER routes
app.use("/api/v1/users", usersRoute);

// * ACCOUNT ROUTES
app.use("/api/v1/accounts", accountsRoute);

// * TRANSACTION ROUTES
app.use("/api/v1/transactions", transactionsRoute);

// ERROR HANDLERS
app.use(globalErrHandler);

// * PORT LISTENING
app.use(
  (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  }
  // app.listen(3000, () => console.log("Server is up and running on port 3000!"))
);

// listen to the server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`This server is running at PORT ${PORT}`));

// http://localhost:3000/api/v1/users
