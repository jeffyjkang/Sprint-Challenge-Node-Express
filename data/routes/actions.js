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

module.exports = router;
