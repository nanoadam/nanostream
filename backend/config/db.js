const mongoose = require("mongoose");
require("colors");

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });

    console.log("MongoDB Connected".blue.bold);
  } catch (err) {
    console.error(`${err.message}`.red);
    process.exit(1);
  }
};
