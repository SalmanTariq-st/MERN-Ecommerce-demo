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
// mongoose.connect('mongodb+srv://st:111222STst@cluster0.deadysi.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true});
// const db = mongoose.connection;
// let a=false;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   a=true;
//   console.log('connected');
// });

// module.exports=a;