// READ ALL USER CONTROL
import { pool } from "../../config/connection.js";

const readAllUsers = async (req, res) => {
  try {
    const queryAllUsers = "SELECT * FROM users WHERE id = $1";
    const userId = req.userId;
    const dbRes = await pool.query(queryAllUsers, [userId]);
    const users = dbRes.rows;

    if (users.length > 0) {
      res.status(200).json({ users });
    }

    // * BELOW code has been refactored by separating the code to getTokenFromHeader.js file
    // GET the token from the header using split method
    // const bearerToken = req.headers.authorization;
    // if (!bearerToken) {
    //   return res.status(401).json({ message: "No token provided" });
    // }
    // const token = bearerToken.split(" ")[1];
    // const result = verifyToken(token);
    // res.status(200).json({ result: result });
    // console.log(result);
    // * BELOW code has been refactored to "split" method - REFER above code
    // GET the token from the header from login then paste here
    // const result = verifyToken(
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA5LCJpYXQiOjE3MjAyMzgzMzcsImV4cCI6MTcyMDI0MTkzN30.-8MC2qjDVBhjHkLxZpRVC9Cm_EdFK_X2hPj2Gm4-CZg"
    // );
    // res.status(200).json({ result: result });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error.message);
  }
};

export default readAllUsers;
