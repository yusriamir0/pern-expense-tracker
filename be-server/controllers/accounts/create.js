// CREATE ACCOUNT CONTROL
// import { pool } from "../../config/connection.js";
// import appErr from "../../utils/appErr.js";

// // Create account and associate with the user
// const createAccountCtrl = async (req, res, next) => {
//   try {
//     // 1. Payload from the logged in
//     const { name, account_type, initial_balance, notes } = req.body;
//     const created_by = await req.userId;

//     // 2. Check if user is logged in
//     if (!created_by) {
//         return next(
//         appErr("You need to be logged in to create a new account", 401)
//       );
//     }

//     // 3. Validate about fill in all fields
//     if (!name || !account_type || !notes) {
//       return res.status(401).json({ message: "Please fill all the fields" });
//     }

//     // 4. Account creation
//     const query = `INSERT INTO accounts (name, account_type, initial_balance, notes, created_by) VALUES ($1, $2, $3, $4, $5) RETURNING *`;

//     const result = await pool.query(query, [
//       name,
//       account_type,
//       initial_balance,
//       notes,
//       created_by,
//     ]);
//     console.log(result.rows);
//     res.status(200).json({
//       message: "Transaction is created",
//     });

//     // 5. Associate the account with the user
//     const updateUserQuery = `UPDATE users SET accounts =array_append(accounts, $1) WHERE id = $2`;
//     const maklumat = await pool.query(updateUserQuery, [
//       (accounts.id, created_by),
//     ]);
//     console.log(maklumat);
//     res.status(201).json9({ status: "Success", data: accounts });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default createAccountCtrl;

// CREATE ACCOUNT CONTROL
import { pool } from "../../config/connection.js";
import appErr from "../../utils/appErr.js";

// Function to create a new account
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

    // Create the account
    const query = `
      INSERT INTO accounts (name, account_type, initial_balance, notes, created_by)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING account_id
    `;
    const result = await pool.query(query, [
      name,
      account_type,
      initial_balance,
      notes,
      created_by,
    ]);
    const account_id = result.rows[0].account_id;

    res.status(201).json({
      status: "success",
      data: { account_id },
    });
  } catch (error) {
    next(error);
  }
};

export default createAccountCtrl;
