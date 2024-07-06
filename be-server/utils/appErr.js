// Customize error objects handler

const appErr = (message, statusCode, status, stack) => {
  const err = new Error(message);
  err.statusCode = statusCode;
  err.status = status;
  err.stack = stack;
  return err;
};

// Using class : add new keyword before appErr
// class appErr extends Error {
//   constructor(message, statusCode, status) {
//     super(message);
//     this.statusCode = statusCode;
//     this.status = status;
//   }
// }

export default appErr;
