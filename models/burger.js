// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(burgerName, cb) {
    orm.create("burgers", ["burger_name", "devoured"], [burgerName, false], cb);
  },
  update: function(burgerId, cb) {
    const whereCondition = "id=" + burgerId;
    orm.update("burgers", { devoured: true }, whereCondition, cb);
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
