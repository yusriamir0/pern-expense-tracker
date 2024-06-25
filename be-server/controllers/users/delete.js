// DELETE USER CONTROL
import { pool } from "../../config/connection.js";

const deleteUserById = "DELETE FROM users WHERE id = $1";
const queryUserById = "SELECT * FROM users WHERE id = $1";

const deleteUserCtrl = async (req, res) => {
  try {
    // check if user is exist
    const id = req.params.id;
    const dbRes = await pool.query(queryUserById, [id]);
    const data = dbRes.rows;
    if (data.length === 0) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    await pool.query(deleteUserById, [id]);
    res.status(201).json({ message: "Succesfully deleted the user" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
};

export default deleteUserCtrl;
