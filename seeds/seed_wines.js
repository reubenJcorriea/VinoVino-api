/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const reds = require("../data/reds.json");
const whites = require("../data/whites.json");
const sparkling = require("../data/sparkling.json");
const rose = require("../data/rose.json");
const dessert = require("../data/dessert.json");
const port = require("../data/port.json");

const redsForInput = reds.map(({ wine, winery, rating, location, image, pairing }) => {
  return {
    wine,
    winery,
    location,
    image,
    rating: rating.average,
    reviews: rating.reviews.split(" ")[0],
    type: "red",
    pairing
  };
});

const whitesForInput = whites.map(({ wine, winery, rating, location, image, pairing }) => {
    return {
      wine,
      winery,
      location,
      image,
      rating: rating.average,
      reviews: rating.reviews.split(" ")[0],
      type: "white",
      pairing
    };
  }
);

const roseForInput = rose.map(({ wine, winery, rating, location, image, pairing }) => {
  return {
    wine,
    winery,
    location,
    image,
    rating: rating.average,
    reviews: rating.reviews.split(" ")[0],
    type: "rose",
    pairing
  };
});

const sparklingForInput = sparkling.map(({ wine, winery, rating, location, image, pairing }) => {
    return {
      wine,
      winery,
      location,
      image,
      rating: rating.average,
      reviews: rating.reviews.split(" ")[0],
      type: "sparkling",
      pairing
    };
  }
);

const dessertForInput = dessert.map(({ wine, winery, rating, location, image, pairing }) => {
    return {
      wine,
      winery,
      location,
      image,
      rating: rating.average,
      reviews: rating.reviews.split(" ")[0],
      type: "dessert",
      pairing
    };
  }
);

const portForInput = port.map(({ wine, winery, rating, location, image, pairing }) => {
  return {
    wine,
    winery,
    location,
    image,
    rating: rating.average,
    reviews: rating.reviews.split(" ")[0],
    type: "port",
    pairing
  };
});

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("wines").del();
  await knex("wines").insert(redsForInput);
  await knex("wines").insert(whitesForInput);
  await knex("wines").insert(roseForInput);
  await knex("wines").insert(sparklingForInput);
  await knex("wines").insert(dessertForInput);
  await knex("wines").insert(portForInput);
};
