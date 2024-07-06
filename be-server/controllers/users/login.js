// LOGIN USER CONTROL
import { pool } from "../../config/connection.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import generateToken from "../../utils/generateToken.js";

dotenv.config();

const readUserByEmailPass = "SELECT * FROM users WHERE email=$1";

const loginUser = async (req, res) => {
  try {
    // request email and password body from server
    const { email, password } = req.body;

    // query database to find a user by email
    const dbRes = await pool.query(readUserByEmailPass, [email]);
    const user = dbRes.rows[0];

    // check if email exists
    if (!user) {
      return res.status(404).json({
        message: "Invalid login credentials",
      });
    }

    // check if password is correct using bcrypt
    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log(isValidPassword);
    if (!isValidPassword) {
      return res.status(401).json({
        message: "Invalid login credentials",
      });
    }

    // if email and password are valid, generate a token
    const id = user.id;
    const token = generateToken(id);

    res.status(200).json({
      status: "Success",
      email: user.email,
      id: user.id,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default loginUser;
