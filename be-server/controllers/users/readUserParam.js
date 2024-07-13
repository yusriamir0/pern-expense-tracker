// READ USER BY ID CONROLLER

import { pool } from "../../config/connection.js";
const queryUserById = "SELECT * FROM users WHERE id = $1";

const readUserByParam = async (req, res) => {
  try {
    // check if user is exist
    const id = req.params.id;
    const dbRes = await pool.query(queryUserById, [id]);
    const data = dbRes.rows;
    if (data.length === 0) {
      res.status(404).json({ message: "User tak jumpa" });
      return;
    }
    res.status(200).json({ message: "User found!", data: data });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error.message);
  }
};

export default readUserByParam;
