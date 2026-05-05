const express = require("express");
const router = express.Router();
const Review = require("../models/review");

router.get("/", async (req, res) => {
  const reviews = await Review.find();
  res.render("reviews/index", { reviews });
});

router.get("/new", (req, res) => {
  res.render("reviews/new");
});

router.post("/", async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.redirect("/reviews");
});

router.get("/:id", async (req, res) => {
  const review = await Review.findById(req.params.id);
  res.render("reviews/show", { review });
});

router.get("/:id/edit", async (req, res) => {
  const review = await Review.findById(req.params.id);
  res.render("reviews/edit", { review });
});

router.put("/:id", async (req, res) => {
  const { authorName, rating, reviewText } = req.body;
  await Review.findByIdAndUpdate(req.params.id, {
    authorName,
    rating,
    reviewText
  });
  res.redirect(`/reviews/${req.params.id}`);
});

router.delete("/:id", async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.redirect("/reviews");
});

module.exports = router;
