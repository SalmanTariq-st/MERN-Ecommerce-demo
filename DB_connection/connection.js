const mongoose = require('mongoose');
require("dotenv").config()


mongoose.set('strictQuery',false);

const connectToMongoDB = async () => {
  try {
       await mongoose.connect(process.env.DATABASE_CON, {useNewUrlParser: true});
      console.log('ok')
  } catch (err) {
      console.log('Error connecting to MongoDB:', err);
  }
}

module.exports = connectToMongoDB;
