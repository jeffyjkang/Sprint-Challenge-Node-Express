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

module.exports = router;
