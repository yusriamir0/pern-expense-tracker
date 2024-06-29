// READ ALL USER CONTROL
import { pool } from "../../config/connection.js";

const queryAllTransactions = "SELECT * FROM transactions WHERE user_id = $1";

const readAllTransactions = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    // read all existing transactions
    const dbRes = await pool.query(queryAllTransactions, [user_id]);
    const data = dbRes.rows;

    // send response with all transactions of the user
    res
      .status(200)
      .json({ data: data, message: `${data.length} transaction(s) found` });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error.message);
  }
};

export default readAllTransactions;
