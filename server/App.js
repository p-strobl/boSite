require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const routes = require("./api/routes");

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.DB, { dbName: "mongodb", useNewUrlParser: true })
  .then(() => {
    console.log("Connection to MongoDB successful");
  })
  .catch((err) => {
    console.log("Connection to MongoDB failed", err);
  });

// Route logging
app.use(morgan("dev"));

// Static route
app.use(express.static(path.join(__dirname, "/client/dist")));

// Handle cors errors
app.use(cors());

// Pars body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle routes
app.use(routes);
// app.use("/uploads", express.static("uploads"));

app.get("*", function(req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "/client/dist/") });
});

// Handle Errors
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
