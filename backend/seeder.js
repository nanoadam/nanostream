const { connectDB } = require('./config/db');

const creators = require('./data/creators');

const Creator = require("./models/Creator");

const Video = require("./models/Video");
const videos = require("./data/videos");

require('dotenv').config();

require("colors")

connectDB();

const importData = async () => {
  try {
    await Creator.deleteMany();
    await Video.deleteMany();


    await Creator.insertMany(creators);
    await Video.insertMany(videos);

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