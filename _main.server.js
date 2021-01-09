//variables

const express = require("express");
const app = express();
const requests = require("requests");

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}
