var express = require('express');
var router = express.Router();
var main = require('./routes/main');
var posts = require('./routes/posts')
//
router.use('/', main);
router.use('/posts',posts);

module.exports = router;
