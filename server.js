const express = require("express");
const friendsRoute = require("./routes/friends.route");
const messaageRoute = require("./routes/messages.route");
const path = require("path");

const PORT = 3000;

const app = express();
app.set("view-engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.baseUrl}${req.url} ${req.method}`);
  console.log(`Request take ${delta}ms to respond`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.get("/", (req, res) => {
  res.render("index.hbs", {
    title: "social Media logos",
    caption: "Follow Us!!!",
  });
});

app.use("/friends", friendsRoute);
app.use("/messages", messaageRoute);

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
