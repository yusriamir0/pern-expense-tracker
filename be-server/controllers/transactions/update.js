// UPDATE USER CONTROL
import { pool } from "../../config/connection.js";

const updateTransactionById =
  "UPDATE transactions SET amount = $1 WHERE account_id = $2";
const queryTransactionById = "SELECT * FROM transactions WHERE id = $1";

const updateTransactionCtrl = async (req, res) => {
  try {
    const { amount, account_id } = req.body;
    const id = req.params.id;

    // validate request body
    if (!amount || !account_id) {
      res.status(404).json({ error: "Invalid request body" });
      return;
    }
    // check if user id already exists
    const dbRes = await pool.query(queryTransactionById, [id]);
    const data = dbRes.rows;

    if (data.length === 0) {
      res.status(404).json({ message: "Transaction not found" });
      return;
    }

    await pool.query(updateTransactionById, [amount, account_id]);
    res.status(201).json({ message: "Succesfully updated the transaction" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error.message);
  }
};

export default updateTransactionCtrl;
