// READ ALL ACCOUNT WHICH BELONG TO THE USER (CONTROL)
import { pool } from "../../config/connection.js";

const readAllAccounts = async (req, res) => {
  try {
    const queryAllAccounts = "SELECT * FROM accounts";
    // read all existing transactions
    const dbRes = await pool.query(queryAllAccounts);
    const data = dbRes.rows;

    // send response with all transactions of the user
    res.status(200).json({ message: `${data.length} account(s) found`, data });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error.message);
  }
};

export default readAllAccounts;
