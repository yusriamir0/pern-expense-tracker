// READ USER BY TOKEN CONTROL

import { pool } from "../../config/connection.js";
const queryUserById = "SELECT * FROM users WHERE id = $1";

const readUserToken = async (req, res) => {
  try {
    // check if user is exist
    const userId = req.userId;
    const dbRes = await pool.query(queryUserById, [userId]);
    const data = dbRes.rows;
    console.log(data);
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

export default readUserToken;

// * BELOW code has been refactored by separating the code to getTokenFromHeader.js file
// GET the token from the header using split method
// const bearerToken = req.headers.authorization;
// if (!bearerToken) {
//   return res.status(401).json({ message: "No token provided" });
// }
// const token = bearerToken.split(" ")[1];
// const result = verifyToken(token);
// res.status(200).json({ result: result });

// * BELOW code has been refactored to "split" method - REFER above code
// GET the token from the header from login then paste here
// const result = verifyToken(
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA5LCJpYXQiOjE3MjAyMzgzMzcsImV4cCI6MTcyMDI0MTkzN30.-8MC2qjDVBhjHkLxZpRVC9Cm_EdFK_X2hPj2Gm4-CZg"
// );
// res.status(200).json({ result: result });

// const users = dbRes.rows;
// const id = users.find((user) => user.id);
// {
// 	"users": [
// 		{
// 		  user."id": 110,
// 			user."full_name": "Daud Dusuki",
// 			user."email": "dauddus@gmail.com",
// 			user."password": "$2b$10$mJmKp.fsXr1a/bZEJVcJj.BDvODLhnA49bpEEJso1PnIwFfwGdcBq",
// 			user."has_created_account": true,
// 			user."created_at": "2024-07-06T06:49:49.668Z"
// 		}
// 	]
// }
