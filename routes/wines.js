const { request } = require("express");
const express = require("express");
const knex = require("knex")(require("../knexfile"));
const router = express.Router();

router.route("/").get((req, res) => {
  knex("wines")
    .then((wines) => {
      res.status(200).json(wines);
    })
    .catch(() =>
      res.status(400).json({
        message: "Error getting wines",
      })
    );
});

router.route("/:id").get((req, res) => {
  knex("wines")
    .where({ id: req.params.id })
    .then((wine) => {
      res.status(200).json(wine);
    })
    .catch(() =>
      res.status(400).json({
        message: `Error getting wine ${req.params.id}`,
      })
    );
}).patch((req, res) => {
  knex('wines')
    .where({ id: req.params.id })
    .update(req.body)
    .then((favourite) => {
      console.log(favourite);
      res.sendStatus(200);
    })
    .catch(() =>
      res.status(400).json({
        message: `Error updating wine ${req.params.id}`,
      })
    );
});

module.exports = router;
