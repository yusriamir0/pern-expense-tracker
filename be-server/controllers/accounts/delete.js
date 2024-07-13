// DELETE ACCOUNT CONTROL
import { pool } from "../../config/connection.js";
const queryAccountById = "SELECT * FROM accounts WHERE created_by = $1";
const deleteAccountById = "DELETE FROM accounts WHERE account_id = $1";

const deleteAccountCtrl = async (req, res) => {
  try {
    // validate request body
    const userId = req.userId;
    const account_id = req.body.account_id;

    // check if account exists
    const accountByIdRes = await pool.query(queryAccountById, [userId]);
    const accountById = accountByIdRes.rows;
    if (accountById.length === 0) {
      return res.status(404).json({ message: "Account not found" });
    }

    // check if account already deleted
    const readAllAccount = `SELECT * FROM accounts WHERE account_id = $1`;
    const readAllAccountRes = await pool.query(readAllAccount, [account_id]);
    const readAllAccountData = readAllAccountRes.rows;
    if (readAllAccountData.length === 0) {
      return res.status(404).json({ message: "Account already deleted" });
    }

    // delete the account
    await pool.query(deleteAccountById, [account_id]);
    res.status(201).json({ message: "Succesfully deleted the Account" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
};

export default deleteAccountCtrl;
