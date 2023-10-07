const express = require("express");
const {
  addFriends,
  getFriendById,
  getAllFriends,
} = require("../controller/friend.controller");

const route = express.Router();

route.use((res, req, next) => {
  console.log(`IP: ${res.ip} ${res.url}`);
  next();
});

route.post("/", addFriends);
route.get("/", getAllFriends);
route.get("/:friendID", getFriendById);

module.exports = route;
