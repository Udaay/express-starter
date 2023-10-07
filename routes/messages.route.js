const express = require("express");
const {
  getMessages,
  uploadMessages,
} = require("../controller/messages.controller");

const route = express.Router();

route.get("/", getMessages);
route.post("/", uploadMessages);

module.exports = route;
