const mongoose = require("mongoose");
//const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI = "mongodb+srv://Tokinantenaina:Ny001300@cluster0.awd9epp.mongodb.net/myFirstDB"
mongoose
  .connect(`${MONGODB_URI}`)
  .then(() => {
    console.log("connected to MongoDb");
  })
  .catch(err => {
    console.log("Failed to connect to MongoDB " + err);
    process.exit(1);
  });
