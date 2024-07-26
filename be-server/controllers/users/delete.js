// DELETE USER CONTROL
import { pool } from "../../config/connection.js";

const deleteUserById = "DELETE FROM users WHERE id = $1";
const queryUserById = "SELECT * FROM users WHERE id = $1";

const deleteUserCtrl = async (req, res) => {
  try {
    // check if user not exist
    const userId = req.userId;
    const dbRes = await pool.query(queryUserById, [userId]);
    const data = dbRes.rows;
    if (data.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    await pool.query(deleteUserById, [userId]);
    res.status(201).json({ message: "Succesfully deleted the user" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
};

export default deleteUserCtrl;
