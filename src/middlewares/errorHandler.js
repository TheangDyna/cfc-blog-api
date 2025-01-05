export const errorHandler = (err, req, res, next) => {
  // Ensure proper formatting of error object
  let error = { ...err, message: err.message };

  // Handle invalid ObjectID errors (MongoDB CastError)
  if (err.name === "CastError" && err.kind === "ObjectId") {
    error.statusCode = 400;
    error.message = "Invalid ID format";
  }

  // Handle missing fields or bad user input (ValidationError)
  if (err.name === "ValidationError") {
    error.statusCode = 400;
    error.message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
  }

  // Handle duplicate key errors (MongoDB)
  if (err.code && err.code === 11000) {
    error.statusCode = 400;
    error.message = "Duplicate field value entered";
  }

  // Set default values for undefined status and statusCode
  error.statusCode = error.statusCode || 500;
  error.status = `${error.statusCode}`.startsWith("4") ? "fail" : "error";

  // Send error response
  res.status(error.statusCode).json({
    status: error.status,
    message: error.message || "An unexpected error occurred",
  });
};
