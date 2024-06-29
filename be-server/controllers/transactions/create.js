// CREATE TRANSACTION CONTROL
import { pool } from "../../config/connection.js";

const query = `INSERT INTO transactions (text, amount, user_id) VALUES ($1, $2, $3)`;

const createTransaction = async (req, res) => {
  try {
    // payload body from client
    const text = req.body.text;
    const amount = req.body.amount;
    const user_id = req.body.user_id;

    // validate about fill in all fields
    if (!text || !amount || !user_id) {
      res.status(400).json({
        message: "Please fill all the fields",
      });
      return;
    }

    // transaction creation
    await pool.query(query, [text, amount, user_id]);
    res.status(200).json({
      message: "Transaction is created",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
    console.log(error.message);
  }
};

export default createTransaction;
