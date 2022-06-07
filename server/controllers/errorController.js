const AppError = require("../utils/appError");

//MongoDB error handler for wrong ID
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const message = `Tour name ${err.keyValue.name} is already in use`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const message = Object.keys(err.errors)
    .map((el) => err.errors[el].message)
    .join(". ");
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  //Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

    //Programming or other unknown error: don't leak error details
  } else {
    // 1) Log error
    console.error("Error", err);

    // 2) Send generic message
    res.status(500).json({ status: "error", message: "Something went wrong" });
  }
};

const handleJWTError = () => {
  return new AppError("Invalid token. Please log in again", 401);
};

const handleTokenExpired = () => {
  return new AppError("Your token has expired. Please login again", 401);
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    // console.log("Error", error);
    if (err.name === "CastError") {
      error = handleCastErrorDB(error);
    }
    if (err.code === 11000) {
      error = handleDuplicateFieldsDB(error);
    }
    if (err.name === "ValidationError") {
      error = handleValidationErrorDB(error);
    }
    if (err.name === "JsonWebTokenError") {
      error = handleJWTError();
    }
    if (error.name === "TokenExpiredError") {
      error = handleTokenExpired();
    }

    sendErrorProd(error, res);
  }
};
