
// Import the model (burgers.js) to use its database functions.
var burgers = require("../models/burger");
module.exports = function (app) {
  // Create all our routes and set up logic within those routes where required.

  app.post("/api/burgers", function (req, res) {
    burgers.create([
      "burger_name", "devoured"
    ], [
        req.body.name, false
      ], function (result) {
        res.redirect("/");
      });
  });

  app.get("/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.update({
      devoured: true
    }, condition,function(data){
      console.log("Burger Devoured");
      res.send("Done");
    });
  });
  app.get("/", function (req, res) {
    burgers.all(function (data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
}