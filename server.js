const express = require("express");

const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", (req, res) => {
  res.send("Hi....");
});

app.listen(3000, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
