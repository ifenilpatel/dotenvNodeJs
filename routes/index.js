require('dotenv').config();

var express = require('express');
var router = express.Router();

let v1 = process.env.DB_HOST;
let v2 = process.env.DB_USER;
let v3 = process.env.DB_PASS;

router.get('/', function (req, res, next) {
  res.send({
    v1,
    v2,
    v3
  });
});

module.exports = router;