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
router.get("/:id", (req, res) => {
  projects
    .get(req.params.id)
    .then(project => {
      if (!project) {
        res.status(404).json({
          message: "The project with the specified ID does not exist."
        });
      }
      res.status(200).json(project);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The project information could not be retrieved." });
    });
});
router.get("/:id/actions", (req, res) => {
  projects
    .getProjectActions(req.params.id)
    .then(action => {
      if (action.length === 0) {
        res.status(404).json({
          message: "The actions with the specified ID does not exist."
        });
      }
      res.status(200).json(action);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The actions information could not be retrieved." });
    });
});

module.exports = router;
