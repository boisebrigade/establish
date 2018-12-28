var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Resource = require('../models/Resource.js');

/* GET ALL resources */
router.get('/', function(req, res, next) {
  Resource.find(function (err, resources) {
    if (err) return next(err);
    res.json(resources);
  });
});

/* GET SINGLE resource BY ID */
router.get('/:id', function(req, res, next) {
  Resource.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE resource */
router.post('/', function(req, res, next) {
  Resource.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE resource */
router.put('/:id', function(req, res, next) {
  Resource.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE resource */
router.delete('/:id', function(req, res, next) {
  Resource.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
