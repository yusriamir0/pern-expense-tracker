// READ SINGLE ACCOUNT WHICH BELONG TO THE USER (CONTROL)
import { pool } from "../../config/connection.js";

const readSingleAccount = async (req, res) => {
  try {
    const userId = req.userId;
    const querySingleAccounts =
      "SELECT account_id FROM accounts WHERE created_by = $1";
    // read all existing transactions
    const dbRes = await pool.query(querySingleAccounts, [userId]);
    const data = dbRes.rows;

    // read single account
    const singleAccountQuery = "SELECT * FROM accounts WHERE account_id = $1";
    const singleAccountRes = await pool.query(singleAccountQuery, [
      data[0].account_id,
    ]);
    const singleAccount = singleAccountRes.rows[0];

    // read all transactions of the account
    const transactionsQuery =
      "SELECT * FROM transactions WHERE account_id = $1";
    const transactionsRes = await pool.query(transactionsQuery, [
      singleAccount.account_id,
    ]);
    singleAccount.transactions = transactionsRes.rows;

    // send response with all transactions of the user

    return res.status(200).json({
      message: `${data.length} account(s) found from user ID: ${userId}`,
      data: singleAccount,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error.message);
  }
};

export default readSingleAccount;
