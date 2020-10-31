const { connectDB } = require('./config/db');

const creators = require('./data/creators');

const Creator = require("./models/Creator");

require('dotenv').config();

require("colors")

connectDB();

const importData = async () => {
  try {
    await Creator.deleteMany();

    await Creator.insertMany(creators);

    await console.log('Data Imported!'.green.inverse)

    await process.exit();
  } catch (err) {
    console.log(`${err}`.red);
    process.exit(1);
  }
};

if(process.argv[2] === '-i') {
  importData();
}