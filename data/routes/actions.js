const express = require("express");
const router = express.Router();
const actions = require("../helpers/actionModel");

router.get("/", (req, res) => {
  actions
    .get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The actions information could not be retrieved." });
    });
});
router.get("/:id", (req, res) => {
  actions
    .get(req.params.id)
    .then(action => {
      if (!action) {
        res.status(404).json({
          message: "The action with the specified ID does not exist."
        });
      }
      res.status(200).json(action);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "The action information could not be retrieved" });
    });
});

router.post("/", (req, res) => {
  const { project_id, description, notes } = req.body;
  if (!project_id || !description || !notes) {
    res.status(400).json({
      errorMessage: "Please provide project_id and description for the post."
    });
  }
  actions
    .insert({ project_id, description, notes })
    .then(action => res.status(201).json({ project_id, description, notes }))
    .catch(error => {
      res.status(500).json({
        error: "There was an error while saving the post to the database"
      });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  actions
    .remove(id)
    .then(actions => {
      if (actions === 0) {
        res
          .status(404)
          .json({
            message: "The actions with the specified ID does not exist."
          });
      }
      res.status(200).json({ message: "action deleted" });
    })
    .catch(error => {
      res.status(500).json({ error: "The action could not be deleted." });
    });
});

module.exports = router;
