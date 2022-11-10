const knex = require("knex")(require("./knexfile"));
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5050;

const wineRoutes = require('./routes/wines');

app.use(cors());
app.use(express.json());
app.use('/wines', wineRoutes);


app.get("/red", (req, res) => {
  knex("wines")
    .select("*")
    .where({ type: "red" })
    .limit(10)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send(`Error getting Red Wine list ${err}`);
    });
});

app.get("/red/:id", (req, res) => {
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
});

app.get("/white", (req, res) => {
  knex("wines")
    .select("*")
    .where({ type: "white" })
    .limit(10)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send(`Error getting White Wine list ${err}`);
    });
});

app.get("/white/:id", (req, res) => {
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
});

app.get("/rose", (req, res) => {
  knex("wines")
    .select("*")
    .where({ type: "rose" })
    .limit(10)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send(`Error getting Rose Wine list ${err}`);
    });
});

app.get("/rose/:id", (req, res) => {
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
});

app.get("/sparkling", (req, res) => {
  knex("wines")
    .select("*")
    .where({ type: "sparkling" })
    .limit(10)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send(`Error getting Sparkling Wine list ${err}`);
    });
});

app.get("/sparkling/:id", (req, res) => {
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
});

app.get("/dessert", (req, res) => {
  knex("wines")
    .select("*")
    .where({ type: "dessert" })
    .limit(10)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send(`Error getting Dessert Wine list ${err}`);
    });
});

app.get("/dessert/:id", (req, res) => {
  knex("wines")
    .where({ id: req.params.id })
    .limit(10)
    .then((wine) => {
      res.status(200).json(wine);
    })
    .catch(() =>
      res.status(400).json({
        message: `Error getting wine ${req.params.id}`,
      })
    );
});

app.get("/port", (req, res) => {
  knex("wines")
    .select("*")
    .where({ type: "port" })
    .limit(10)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send(`Error getting Port Wine list ${err}`);
    });
});

app.get("/port/:id", (req, res) => {
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
});




app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
