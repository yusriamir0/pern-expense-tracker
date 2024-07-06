import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const isAuth = (req, res, next) => {
  // check if the token is provided
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.status(401).json({ message: "No token provided" });
  }
  // check if the token is valid
  const token = bearerToken.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  // check if token valid
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    console.log(decoded);
    // pass user id to the next middleware or controller
    req.userId = decoded.id;
    req.userEmail = decoded.email;
    next();
  });
};

export default isAuth;
