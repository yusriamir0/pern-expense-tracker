// UPDATE USER CONTROL
import { pool } from "../../config/connection.js";

const updateTransactionById =
  "UPDATE transactions SET text = $1, amount = $2 WHERE id = $3";
const queryTransactionById = "SELECT * FROM transactions WHERE id = $1";

const updateTransactionCtrl = async (req, res) => {
  try {
    const text = req.body.text;
    const amount = req.body.amount;
    const id = req.params.id;

    // validate request body
    if (!text || !amount) {
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

    await pool.query(updateTransactionById, [text, amount, id]);
    res.status(201).json("Succesfully updated the transaction");
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error.message);
  }
};

export default updateTransactionCtrl;
