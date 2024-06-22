import { pool } from "../../config/connection.js";

const queryAllUsers = "SELECT * FROM users";
const queryUserById = "SELECT * FROM users WHERE id = $1";

const readAllUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const dbRes = await pool.query(queryUserById, [id]);
    res.status(201).json("Succesfully read the user");
    console.log(dbRes);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error.message);
  }
};

export default readAllUsers;
