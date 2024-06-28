// CREATE USER CONTROL
import { pool } from "../../config/connection.js";
import bcrypt, { genSalt } from "bcrypt";

const query = `INSERT INTO users (full_name, email, password, has_created_account) VALUES ($1, $2, $3, $4)`;

const createUser = async (req, res) => {
  try {
    const full_name = req.body.full_name;
    const email = req.body.email;
    const password = req.body.password;
    const has_created_account = req.body.has_created_account;

    // validate about fill in all fields
    if (!full_name || !email || !password) {
      res.status(400).json({
        message: "Please fill all the fields",
      });
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

    // validate existing email
    const emailQuery = `SELECT * FROM users WHERE email = $1`;
    const existingEmail = await pool.query(emailQuery, [email]);
    if (existingEmail.rows.length > 0) {
      console.log(existingEmail);
      res.status(400).json({
        message: "Email already exists",
      });
      return;
    }

    //  bcrypt passwords
    const saltRounds = 10;
    // hash the password
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // profile creation
    await pool.query(query, [
      full_name,
      email,
      hashedPassword,
      has_created_account,
    ]);
    res.status(200).json({
      message: "User is created",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
    console.log(error.message);
  }
};

export default createUser;
