var path = require("path");
var friends = require("../data/friend");

module.exports = function(app) {
  app.get("/api/friend", function(req, res) {
    res.json(friends);
  });
  app.post("/api/friend", function(req, res) {
    res.json(friends);
  });
};
