const { connectDB } = require('./config/db');
const mongoose = require('mongoose');

const creators = require('./data/creators');

require('dotenv').config();

connectDB();

const importData = () => {
  try {
  } catch (err) {}
};
