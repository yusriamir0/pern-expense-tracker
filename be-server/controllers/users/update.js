// UPDATE USER CONTROL
import { pool } from "../../config/connection.js";

const updateById = "UPDATE users SET full_name = $1, email = $2 WHERE id = $3";
const queryUserById = "SELECT * FROM users WHERE id = $1";

const updateUserCtrl = async (req, res) => {
  try {
    const full_name = req.body.full_name;
    const email = req.body.email;
    const id = req.params.id;

    // validate request body
    if (!full_name || !email) {
      res.status(404).json({ error: "Invalid request body" });
      return;
    }
    // check if user id already exists
    const dbRes = await pool.query(queryUserById, [id]);
    const data = dbRes.rows;

    if (data.length === 0) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // validate email
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        message: "Please enter a valid email",
      });
      return;
    }

    await pool.query(updateById, [full_name, email, id]);
    res.status(201).json("Succesfully updated the user");
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error.message);
  }
};

export default updateUserCtrl;
