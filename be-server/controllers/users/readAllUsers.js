// READ ALL USER CONTROL
import e from "express";
import { pool } from "../../config/connection.js";

const readAllUsers = async (req, res, next) => {
  try {
    // 1. Query to get all users
    const queryAllUsers = "SELECT * FROM users";
    const userRes = await pool.query(queryAllUsers);
    const users = userRes.rows;

    if (users.length > 0) {
      // 2. For each user, retrieve their accounts and transactions
      for (let user of users) {
        const accountsQuery = `SELECT * FROM accounts WHERE created_by = $1`;
        const accountsRes = await pool.query(accountsQuery, [user.id]);
        const accounts = accountsRes.rows;

        for (let account of accounts) {
          const transactionsQuery = `SELECT * FROM transactions WHERE account_id= $1`;
          const transactionsRes = await pool.query(transactionsQuery, [
            account.account_id,
          ]);
          const transactions = transactionsRes.rows;
          account.transactions = transactions;
        }
        user.accounts = accounts;
      }
      res.status(200).json({ users });
    } else {
      res.status(404).json({ message: "No user found!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Internal Error" });
    console.log(error.message);
  }
};

export default readAllUsers;

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

// const users = dbRes.rows;
// const id = users.find((user) => user.id);
// {
// 	"users": [
// 		{
// 		  user."id": 110,
// 			user."full_name": "Daud Dusuki",
// 			user."email": "dauddus@gmail.com",
// 			user."password": "$2b$10$mJmKp.fsXr1a/bZEJVcJj.BDvODLhnA49bpEEJso1PnIwFfwGdcBq",
// 			user."has_created_account": true,
// 			user."created_at": "2024-07-06T06:49:49.668Z"
// 		}
// 	]
// }
