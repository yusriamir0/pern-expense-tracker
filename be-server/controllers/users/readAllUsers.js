// READ ALL USER CONTROL
import { pool } from "../../config/connection.js";
import verifyToken from "../../utils/verifyToken.js";

const queryAllUsers = "SELECT * FROM users";

const readAllUsers = async (req, res) => {
  try {
    // read all existing users
    await pool.query(queryAllUsers);
    const result = verifyToken(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA5LCJpYXQiOjE3MjAxODc3ODMsImV4cCI6MTcyMDE5MTM4M30.raNEHeHPpGKTqk6UaBq2SaDBjT1givJf5W6hIOYO0s0"
    );
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error.message);
  }
};

export default readAllUsers;
