// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let books = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Favourite Books Arena',
    books: ''
   });
});

module.exports = router;
