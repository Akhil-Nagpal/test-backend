require("dotenv").config();

const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Here</h1>");
});

app.get("/signup", (req, res) => {
  res.send("<h1>SignUp If not Logined!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Us!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Us!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
