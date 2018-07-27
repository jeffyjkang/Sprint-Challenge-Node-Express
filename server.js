const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const projects = require("./data/routes/projects");
const actions = require("./data/routes/actions");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.send("<h1>Hello<h1>");
});

server.use("/projects", projects);
server.use("/actions", actions);

server.listen(8000, () => console.log("API running..."));
