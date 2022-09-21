const express = require('express');
const router = express.Router();

router.get('/', function(req,res, next) {
    res.send("Hello Friend, this is an example!");
});

module.exports = router;