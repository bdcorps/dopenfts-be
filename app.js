"use strict";
const env = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nftService = require("./nft/index.js");
const nft = require("./nft/index.js");
const app = express();

console.log(process.env.DB_NAME);

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.dipta.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Allow all CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.get("/listNFTs", async function (req, res, next) {
  try {
    console.log(`New Request from ${req.url}`);
    const nfts = await nftService.listNFT();
    res.json(nfts);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

app.get("/tworandom", async function (req, res, next) {
  try {
    const random1 = await nftService.randomNFT();
    let random2 = await nftService.randomNFT();

    while (random1._id === random2._id) {
      random2 = await nftService.randomNFT();
    }

    res.json([random1, random2]);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// To be worked on

/* app.get("/addBook", async function (req, res, next) {
  const title = req.query.title;
  const author = req.query.author;
  const rating = req.query.rating;

  try {
    const books = await BookService.addBook(title, author, rating);
    res.json(books);
  } catch (e) {
    next(e);
  }
}); */

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}!`));
