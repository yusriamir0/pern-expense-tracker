// DELETE USER CONTROL
import { pool } from "../../config/connection.js";

const deleteTransactionById = "DELETE FROM transactions WHERE id = $1";
const queryTransactionById = "SELECT * FROM transactions WHERE id = $1";

const deleteTransactionCtrl = async (req, res) => {
  try {
    // check if user not exist
    const id = req.params.id;
    const dbRes = await pool.query(queryTransactionById, [id]);
    const data = dbRes.rows;
    if (data.length === 0) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    await pool.query(deleteTransactionById, [id]);
    res.status(201).json({ message: "Succesfully deleted the Transaction" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
};

export default deleteTransactionCtrl;
