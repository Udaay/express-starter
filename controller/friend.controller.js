const friends = require("../model/data");

function addFriends(req, res) {
  const { name } = req.body;
  console.log(typeof name);
  if (typeof name !== "string" || name === "") {
    return res
      .status(400)
      .json({
        message: "Enter valid string for name",
      })
      .end();
  }

  const newFriend = {
    name,
    id: friends.length,
  };

  friends.push(newFriend);
  res.status(201).json(newFriend);
}

function getFriendById(req, res) {
  const friendID = Number(req.params.friendID);
  const friend = friends.find((frnd) => frnd.id === friendID);

  if (friend) res.json(friend);
  else {
    res.status(404).json({
      message: `${friendID} doesn't exist`,
    });
  }
}

function getAllFriends(req, res) {
  res.json(friends);
}

module.exports = {
  addFriends,
  getFriendById,
  getAllFriends,
};
