// import appErr from "../utils/appErr.js";
// import getTokenFromHeader from "../utils/getTokenFromHeader.js";
// import verifyToken from "../utils/verifyToken.js";

// const isAuth = (req, res, next) => {
//   try {
//     // get token from req header
//     const token = getTokenFromHeader(req);

//     // verify the token
//     const decodedUser = verifyToken(token);

//     // check if the token is valid
//     if (!decodedUser) {
//       const err = new appErr("Unauthorized", 401);
//       return next(err);
//     }
//     // save the user into req object
//     req.userId = decodedUser.id;
//     console.log(req.userId);
//     next();
//   } catch (error) {
//     next(error);
//   }
// };
// export default isAuth;

// import getTokenFromHeader from "../utils/getTokenFromHeader.js";
// import verifyToken from "../utils/verifyToken.js";

// const isAuth = (req, res, next) => {
//   try {
//     // check if the token is provided and valid
//     const token = getTokenFromHeader(req);
//     console.log(token);
//     if (token === 0) {
//       return next(new Error("Token is not provided", 401));
//     }
//     // check if token valid
//     const decodedUser = verifyToken(token);
//     console.log(decodedUser);
//     // pass user id to the next middleware or controller
//     req.userId = decodedUser.id;
//     next();
//   } catch (error) {
//     return next(error);
//   }
// };

// export default isAuth;

// * COMBINE getTokenFromHeader + verifyToken
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const isAuth = (req, res, next) => {
  // check if the token is provided
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.status(401).json({ message: "No token provided" });
  }

  // check if token valid
  const token = bearerToken.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    // pass user id to the next middleware or controller
    req.userId = decoded.id;
    next();
  });
};

export default isAuth;
