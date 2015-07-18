var express = require('express');
var router = express.Router();
var path = require('path');
var model = require('../models');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
	// var index = path.join(__dirname, '..', 'views', 'index.html');
	// res.sendFile(index);
	model.Youth.find({}).exec()
		.then(function(data) {
			res.json(data);
		})
});

router.get('/manager', function(req, res, next) {
	var index = path.join(__dirname, '..', 'views', 'manager.html');
	res.sendFile(index);
});

router.get('/todo', function(req, res, next) {
	var index = path.join(__dirname, '..', 'views', 'todo.html');
	res.sendFile(index);
});

router.get('/login', function(req, res, next) {
	var index = path.join(__dirname, '..', 'views', 'login.html');
	res.sendFile(index);
})
module.exports = router;