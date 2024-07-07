// const getTokenFromHeader = (req) => {
//   // check if the token is provided
//   const bearerToken = req.headers.authorization;
//   if (!bearerToken) {
//     return "No token provided";
//   }
//   // check if the token is valid
//   const token = bearerToken.split(" ")[1];
//   if (!token) {
//     return "Unauthorized";
//   }
//   return token;
// };
// export default getTokenFromHeader;

const getTokenFromHeader = (req) => {
  // check if the token is provided
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.status(401).json({ message: "No token provided" });
  }
  const token = bearerToken.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  return token;
};

export default getTokenFromHeader;
