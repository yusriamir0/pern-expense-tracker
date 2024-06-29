// LOGIN USER CONTROL
import { pool } from "../../config/connection.js";

const readUserByEmailPass = `SELECT * FROM users WHERE email=$1 AND password = $2`;

const loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const queryLogin = await pool.query(readUserByEmailPass, [email, password]);
    const login = queryLogin.rows;
    console.log(queryLogin);

    // check if user is already exist
    if (login.length > 0) {
      return res.status(200).json({
        message: "Login success!",
      });
    }
    if (login.length === 0) {
      return res.status(400).json({
        message: "Please enter valid email or password",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export default loginUser;
