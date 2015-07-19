var express = require('express');
var router = express.Router();
var path = require('path');
var model = require('../models');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
	var index = path.join(__dirname, '..', 'views', 'index.html');
	res.sendFile(index);
});

router.get('/manager', function(req, res, next) {
	var index = path.join(__dirname, '..', 'public', 'templates', 'dashboard.html');
	res.sendFile(index);
});

router.get('/todo', function(req, res, next) {
	var index = path.join(__dirname, '..', 'public', 'templates', 'todo.html');
	res.sendFile(index);
});

router.get('/youthList', function(req, res, next) {

	model.Youth.find().exec().then(function(youthList){
		res.json(youthList)
	})
});

router.get('/youth', function(req, res, next) {
	model.Youth.find({
		firstName: 'Kaito'
	}).exec().then(function(youth) {
		res.send(youth);
	})
})

router.put('/updateSettings', function(req, res, next) {
	model.Youth.findOneAndUpdate({
		firstName: 'Kaito'
	}, {
		products[0].productName: req.body.productName,
			products[0].price: req.body.price
	}, function() {
		res.send(200)
	})

})

// router.get('/login', function(req, res, next) {
// 	var index = path.join(__dirname, '..', 'public', 'templates', 'login.html');
// 	res.sendFile(index);
// })
// router.get('/signup', function(req, res, next) {
// 	var index = path.join(__dirname, '..', 'public', 'templates', 'signup.html');
// 	res.sendFile(index);
// })

module.exports = router;