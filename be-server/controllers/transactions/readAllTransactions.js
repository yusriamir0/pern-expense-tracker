// READ ALL TRANSACTIONS WHICH BELONG TO THE USER (CONTROL)
import { pool } from "../../config/connection.js";

const readAllTransactions = async (req, res) => {
  const userId = req.userId;
  console.log(userId);

  try {
    const queryAllTransactions =
      "SELECT * FROM transactions WHERE user_id = $1";
    // read all existing transactions
    const dbRes = await pool.query(queryAllTransactions, [userId]);
    const data = dbRes.rows;

    // send response with all transactions of the user
    res
      .status(200)
      .json({ message: `${data.length} transaction(s) found`, data });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error.message);
  }
};

export default readAllTransactions;
