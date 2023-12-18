var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.send("Hello Express!! 👋");
});

router.get("/h", function (req, res) {
  res.send("Hello from tanmay!! 👋");
});  

module.exports = router;
