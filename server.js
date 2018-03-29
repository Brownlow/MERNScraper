const express = require("express");
const mongoose = require("mongoose");
const request = require("request");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const db = require("./models");
const routes = require('./routes');

// Set port for local and deployed
const PORT = process.env.PORT || 8000;

// Initialize Express
const app = express();

//Routes
app.use(routes);

// Mongoose
const MONGODB_URI = process.env.PORT || 'mongodb://localhost/newsSearch'

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Body Parser Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api_json"}));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});









app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
