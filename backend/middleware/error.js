const ErrorResponse = require('../utils/ErrorResponse');

const errHandler = (err, req, res, next) => {
  let error = { ...err };

  console.log(err);

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  if (err.name === 'JsonWebTokenError') {
    error = new ErrorResponse('The JWT token is not formatted correctly');
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server error',
  });
};

module.exports = errHandler;
