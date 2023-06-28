const path = require("path");
const express = require("express");
const routes = express();
const fs = require("fs");

routes.get("/login", (req, res) => {
  res.send(
    "<form action='/' method='POST' > <input type='text' name='username' placeholder='Username' /> <button>Login</button></form>"
  );
});

routes.post("/", (req, res, next) => {
  const username = req.body.username;
  res.send(
    `<script>localStorage.setItem("username", ${JSON.stringify(
      username
    )}); window.location.href = '/'; console.log('hello')</script>`
  );
});
routes.post("/messages", (req, res) => {
  const username = req.body.username;
  const chat = req.body.chats;
  const message = username + ":" + chat + " ";

  fs.appendFile("./message.txt", message, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Text appended to the file successfully.");
    }
  });

  res.redirect("/");
});

routes.get("/", (req, res) => {
  const message = fs.readFileSync("./message.txt", "utf-8");
  const username = message;
  res.render("index", { username });
});
module.exports = routes;
