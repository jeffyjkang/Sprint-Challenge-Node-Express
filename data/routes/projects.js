const express = require("express");
const router = express.Router();
const projects = require("../helpers/projectModel");

router.get("/", (req, res) => {
  projects
    .get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The projects infromation could not be retreived." });
    });
});

module.exports = router;
