// READ ALL USER CONTROL
import { pool } from "../../config/connection.js";

const queryAllUsers = "SELECT * FROM users";

const readAllUsers = async (req, res) => {
  try {
    const dbRes = await pool.query(queryAllUsers);
    const data = dbRes.rows;
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error.message);
  }
};

export default readAllUsers;
