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

router.post("/", (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({
      errorMessage: "Please provide name and description for the post."
    });
  }
  projects
    .insert({ name, description })
    .then(project => res.status(201).json({ name, description }))
    .catch(error => {
      res.status(500).json({
        error: "There was an error while saving the post to the database"
      });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  projects
    .remove(id)
    .then(projects => {
      if (projects === 0) {
        res.status(404).json({
          message: "The project with the specified ID does not exist."
        });
      }
      res.status(200).json({ message: "project deleted" });
    })
    .catch(error => {
      res.status(500).json({ error: "The project could not be deleted." });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({ errorMessage: "Please provide name for post." });
  }
  projects
    .update(id, { name, description })
    .then(project => {
      if (!name || !description) {
        res.status(404).json({
          errorMessage: "The user with the specified ID does not exist."
        });
      }
      res.status(200).json({ name, description });
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The user information could not be modified." });
    });
});

module.exports = router;
