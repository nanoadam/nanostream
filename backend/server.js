const express = require('express');
const { connectDB } = require('./config/db');
const morgan = require('morgan');
const error = require('./middleware/error');
require('dotenv').config();

require('colors');

const server = express();

connectDB();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(morgan('dev'));

server.use('/api/v1/creators', require('./routes/creators'));
server.use('/api/v1/videos', require('./routes/videos'));

server.use(error);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () =>
  console.log(`Server started on PORT ${PORT}`.yellow.bold)
);
