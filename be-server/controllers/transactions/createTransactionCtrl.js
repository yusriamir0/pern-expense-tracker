// CREATE TRANSACTION CONTROL
// import { pool } from "../../config/connection.js";
// import appErr from "../../utils/appErr.js";

// const query = `INSERT INTO transactions (name, amount, transaction_type, category, user_id) VALUES ($1, $2, $3, $4, $5)`;

// const createTransaction = async (req, res, next) => {
//   try {
//     // payload body from client
//     const user_id = req.userId;
//     const { name, amount, transaction_type, category } = req.body;

//     // validate the fill up data in all fields
//     if (!name || !amount || !transaction_type || !category) {
//       return next(appErr("Please fill all the fields", 400, "Error"));
//     }

//     // transaction creation
//     await pool.query(query, [
//       name,
//       amount,
//       transaction_type,
//       category,
//       user_id,
//     ]);
//     res.status(200).json({
//       message: "Transaction is created",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal Server Error",
//     });
//     console.log(error.message);
//   }
// };

// export default createTransaction;

// CREATE TRANSACTION CONTROL
import { pool } from "../../config/connection.js";
import appErr from "../../utils/appErr.js";

// Function to create a new transaction
const createTransactionCtrl = async (req, res, next) => {
  try {
    // Check if a user exists
    const userId = req.userId;
    const querySingleAccounts = "SELECT * FROM users WHERE id = $1";
    const dbRes = await pool.query(querySingleAccounts, [userId]);
    const accountRes = dbRes.rows;
    if (accountRes.length === 0) {
      return next(appErr("User Not Found", 404));
    }

    const { account_id, amount, transaction_type, description, category } =
      req.body;
    // Check if the account exists
    const accountQuery = `SELECT * FROM accounts WHERE account_id = $1`;
    const accountResult = await pool.query(accountQuery, [account_id]);

    // Validate required fields
    if (!account_id || !amount || !transaction_type || !category) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    if (accountResult.rowCount === 0) {
      return next(appErr("Account not found", 404));
    }

    // Create the transaction
    const transactionQuery = `
      INSERT INTO transactions (account_id, amount, transaction_type, description, category)
      VALUES ($1, $2, $3, $4, $5)
    `;
    await pool.query(transactionQuery, [
      account_id,
      amount,
      transaction_type,
      description,
      category,
    ]);

    res.status(201).json({
      status: "success",
      message: "Transaction created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export default createTransactionCtrl;
