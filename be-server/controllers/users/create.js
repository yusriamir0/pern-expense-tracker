import { pool } from "../../config/connection.js";

const query = `INSERT INTO users (full_name, email, password, has_created_account) VALUES ($1, $2, $3, $4)`;

const createUser = async (minta, res) => {
  try {
    const full_name = minta.body.full_name;
    const email = minta.body.email;
    const password = minta.body.password;
    const has_created_account = minta.body.has_created_account;

    if (!full_name || !email || !password) {
      res.status(400).json({
        message: "Please fill all the fields",
      });
      return;
    }

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        message: "Please enter a valid email",
      });
      return;
    }

    await pool.query(query, [full_name, email, password, has_created_account]);
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
