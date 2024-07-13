// UPDATE USER CONTROL
import { pool } from "../../config/connection.js";
import bcrypt from "bcrypt";

const updateUserCtrl = async (req, res) => {
  try {
    const userId = req.userId;
    const { full_name, email, password } = req.body;

    // check if user id already exists
    const queryUserById = "SELECT * FROM users WHERE id = $1";
    const dbRes = await pool.query(queryUserById, [userId]);
    const data = dbRes.rows;
    if (data.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // check if user update the password by using brcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // validate request body
    const updateById =
      "UPDATE users SET full_name = $1, email = $2, password = $3 WHERE id = $4";
    if (!full_name || !email || !hashedPassword) {
      res.status(404).json({ error: "Invalid request body" });
      return;
    }

    // validate password length
    const minPasswordLength = 8;
    if (password.length < minPasswordLength) {
      return res.status(400).json({
        message: `Password should be at least ${minPasswordLength} characters long`,
      });
    }
    
    // check password is required
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
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

    // validate existing email
    const queryEmail = `SELECT * FROM users WHERE email =$1`;
    const emailRes = await pool.query(queryEmail, [email]);
    const emailExist = emailRes.rows;
    if (emailExist.length > 0) {
      return res.status(200).json({ message: "Email already exists" });
    }

    await pool.query(updateById, [full_name, email, hashedPassword, userId]);
    res.status(201).json({ message: "Succesfully updated the user" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
};

export default updateUserCtrl;
