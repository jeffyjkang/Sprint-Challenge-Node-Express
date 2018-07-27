const express = require("express");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>Hello<h1>");
});

server.listen(8000, () => console.log("API running..."));
