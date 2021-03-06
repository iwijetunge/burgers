const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  res.redirect("/burgers");
});

router.get("/burgers", (req, res) => {
  burger.all(burgerData => {
    console.log("burgerData: ", burgerData);
    res.render("index", { burger_data: burgerData });
  });
});

router.put("/burgers/:id", (req, res) => {
  burger.update(req.params.id, data => {
    console.log("data: ", data);
    res.json(data);
  })
});

router.post("/burgers", (req, res) => {
  burger.create(req.body.burger_name, data => {
    console.log("data: ", data);
    res.json(data);
  })
})


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/cats", function(req, res) {
  burger.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
