// READ SINGLE ACCOUNT WHICH BELONG TO THE USER (CONTROL) BY PASSING JWT

import { pool } from "../../config/connection.js";

const readSingleAccount = async (req, res, next) => {
  try {
    // get user id from the request object passed by the middleware (auth.js)
    const userId = req.userId;

    // 1. Query ALL ACCOUNTS from 1 user ID
    const queryAccountsById = "SELECT * FROM users WHERE id = $1";
    const accountsByIdRes = await pool.query(queryAccountsById, [userId]);
    const accountsById = accountsByIdRes.rows;

    if (
      accountsById.length > 0 // validate id existing
    ) {
      // 2. For each 1 user id, retrieve their accounts and transactions
      for (let userId of accountsById) {
        const accountsQuery = `SELECT * FROM accounts WHERE created_by = $1`;
        const accountsRes = await pool.query(accountsQuery, [userId.id]);
        const accounts = accountsRes.rows;

        for (let account of accounts) {
          const transactionsQuery = `SELECT * FROM transactions WHERE account_id= $1`;
          const transactionsRes = await pool.query(transactionsQuery, [
            account.account_id,
          ]);
          const transactions = transactionsRes.rows;
          account.transactions = transactions;
        }
        userId.accounts = accounts;
      }
      res.status(200).json({
        message: `${accountsById[0].accounts.length} account(s) found from user ID: ${userId}`,
        accountsById: accountsById,
      });
    } else {
      res.status(404).json({ message: "No user found!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Internal Error" });
    console.log(error.message);
  }
};

export default readSingleAccount;

// * BELOW code has been refactored by separating the code to getTokenFromHeader.js file
// GET the token from the header using split method
// const bearerToken = req.headers.authorization;
// if (!bearerToken) {
//   return res.status(401).json({ message: "No token provided" });
// }
// const token = bearerToken.split(" ")[1];
// const result = verifyToken(token);
// res.status(200).json({ result: result });

// * BELOW code has been refactored to "split" method - REFER above code
// GET the token from the header from login then paste here
// const result = verifyToken(
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA5LCJpYXQiOjE3MjAyMzgzMzcsImV4cCI6MTcyMDI0MTkzN30.-8MC2qjDVBhjHkLxZpRVC9Cm_EdFK_X2hPj2Gm4-CZg"
// );
// res.status(200).json({ result: result });
