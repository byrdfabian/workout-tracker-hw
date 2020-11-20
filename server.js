//Dependencies required for this app
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

//require('dotenv').config()
const PORT = process.env.PORT || 3000; //localhost PORT

const app = express(); // Providing app a value of express linking it to the dependency package
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { //Creating the connections
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
// Starting the app and directing it to the routes
app.use(require("./routes/router.js"));
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});