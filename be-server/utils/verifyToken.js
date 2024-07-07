// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();

// const verifyToken = (token) => {
//   try {
//     return jwt.verify(token, process.env.JWT_SECRET);
//   } catch (err) {
//     return "Token not valid";
//   }
// };
// export default verifyToken;

// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();

// const verifyToken = (token) => {
//   return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return "Token is not valid";
//     } else {
//       return decoded;
//     }
//   });
// };

// export default verifyToken;

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyToken = (token) => {
  // check if token valid
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
  // pass user id to the next middleware or controller
};

export default verifyToken;
