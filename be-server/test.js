// Testing create users and add them to the list of users
import { pool } from "../../config/connection.js";
import appErr from "../../utils/appErr.js";

// Create account and associate with user
const createAccountCtrl = async (req, res, next) => {
  try {
    const { name, account_type, initial_balance, notes } = req.body;
    const created_by = req.userId;

    // Check if user is logged in
    if (!created_by) {
      return next(
        appErr("You need to be logged in to create a new account", 401)
      );
    }

    // Validate required fields
    if (!name || !account_type || !initial_balance || !notes) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    // Find the logged-in user
    const userFound = await findUserById(created_by);
    if (!userFound) {
      return next(appErr("User not found", 404));
    }

    // Create the account
    const query = `INSERT INTO accounts (name, account_type, initial_balance, notes, created_by) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const result = await pool.query(query, [
      name,
      account_type,
      initial_balance,
      notes,
      created_by,
    ]);
    const account = result.rows[0];

    // Update user's accounts
    const updateUserQuery = `UPDATE users SET accounts = array_append(accounts, $1) WHERE id = $2`;
    await pool.query(updateUserQuery, [account.id, created_by]);

    res.status(201).json({
      status: "success",
      data: account,
    });
  } catch (error) {
    next(error);
  }
};

export default createAccountCtrl;
