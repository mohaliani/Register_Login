const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.URI;
module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(URI,connectionParams);
    console.log("connected to DB");
  } catch (err) {
    console.log(err);
    console.log("failed connection");
  }
};
