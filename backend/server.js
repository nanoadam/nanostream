const express = require('express');
const { connectDB } = require('./config/db');
const morgan = require('morgan');
require('dotenv').config();

require('colors');

const server = express();

connectDB();

server.use(express.json());

server.use(morgan('dev'));

server.use('/api/v1/creators', require('./routes/creators'));
server.use('/api/v1/videos', require('./routes/videos'));

const PORT = process.env.PORT || 3000;

server.listen(PORT, () =>
  console.log(`Server started on PORT ${PORT}`.yellow.bold)
);
