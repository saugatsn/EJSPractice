const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/ig/:username", (req, res) => {
  const instaData = require("./data.json");
  console.log(instaData);
  let { username } = req.params;
  const data = instaData[username];
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});
app.get("/rolldice", (req, res) => {
  let roll = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { num: roll });
});
app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
