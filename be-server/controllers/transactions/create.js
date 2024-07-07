// CREATE TRANSACTION CONTROL
import { pool } from "../../config/connection.js";

const query = `INSERT INTO transactions (name, amount, user_id) VALUES ($1, $2, $3)`;

const createTransaction = async (req, res) => {
  try {
    // payload body from client
    const name = req.body.name;
    const amount = req.body.amount;
    const user_id = req.body.user_id;

    // validate about fill in all fields
    if (!name || !amount || !user_id) {
      res.status(400).json({
        message: "Please fill all the fields",
      });
      return;
    }

    // transaction creation
    await pool.query(query, [name, amount, user_id]);
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
