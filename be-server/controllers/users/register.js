// CREATE USER CONTROL
import { pool } from "../../config/connection.js";
import bcrypt, { genSalt } from "bcrypt";
import appErr from "../../utils/appErr.js";

const query = `INSERT INTO users (full_name, email, password, has_created_account) VALUES ($1, $2, $3, $4)`;

const createUser = async (req, res, next) => {
  try {
    const { full_name, email, password } = req.body;
    const has_created_account = req.body.has_created_account 

    // check if fields are empty
    if (!full_name || !email || !password) {
      const err = appErr("Please provide all the required fields", 500);
      return next(err);
    }

    // validate email
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      const err = appErr("Please enter a valid email address", 400);
      return next(err);
    }

    // validate existing email
    const emailQuery = `SELECT * FROM users WHERE email = $1`;
    const existingEmail = await pool.query(emailQuery, [email]);
    if (existingEmail.rows.length > 0) {
      const err = appErr("User already exists", 400);
      return next(err);
    }

    //  bcrypt passwords
    const saltRounds = 10;
    // hash the password
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

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
  }
};

export default createUser;
