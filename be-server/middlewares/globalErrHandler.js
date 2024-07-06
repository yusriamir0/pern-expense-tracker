// GLOBAL ERROR HANDLERS
const globalErrHandler = (err, req, res, next) => {
  // Status code
  const statusCode = err.statusCode || 500;

  // Status
  const status = err.status || "error";
 
  // Message
  const message = err.message;

  // Stack
  const stack = err.stack;

  res.status(statusCode).json({ status, message, stack });
};

export default globalErrHandler;
