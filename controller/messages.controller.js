const path = require("path");

function getMessages(req, res) {
  // console.log(`${__dirname}/../public/peakpx.jpg`);
  // res.send("<ul> <li>Hello</> <li> Friend</li> </ul>");
  // res.sendFile(path.join(__dirname, "..", "public", "images", "peakpx.jpg"));

  res.render("messages.hbs", {
    title: "Incoming Messages",
    name: "Uday",
  });
}

function uploadMessages(req, res) {
  console.log("UPloading message");
}

module.exports = {
  getMessages,
  uploadMessages,
};
