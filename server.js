const express = require("express");
const colors = require("colors");

const creators = require("./routes/creators");

const server = express();

// Middleware

// Routes
server.use("/api/v1/creators", creators);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () =>
  console.log(`Server started on PORT ${PORT}`.yellow.bold)
);
