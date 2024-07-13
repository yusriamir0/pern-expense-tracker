// UPDATE ACCOUNT CONTROL
import { pool } from "../../config/connection.js";

const updateAccountCtrl = async (req, res) => {
  try {
    // retrieve the data from request body
     const { initial_balance, notes } = req.body;
    const userId = req.userId;

    // validate request body
    if (!initial_balance || !notes) {
      return res.status(404).json({ error: "Invalid request body" });
    }
    // check if user id exists
    const queryAccountById = "SELECT * FROM accounts WHERE created_by = $1";
    const dbRes = await pool.query(queryAccountById, [userId]);
    const data = dbRes.rows;
    if (data.length === 0) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    // update the account
    const updateAccountById =
      "UPDATE accounts SET initial_balance = $1, notes = $2 WHERE created_by = $3";
    await pool.query(updateAccountById, [initial_balance, notes, userId]);
    res.status(201).json({
      message: "Succesfully updated the transaction",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default updateAccountCtrl;
