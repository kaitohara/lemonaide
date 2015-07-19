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

	model.Youth.find().exec().then(function(youthList) {
		res.json(youthList.data)
	})
});


router.get('/youth', function(req, res, next) {
	model.Youth.find({
		firstName: 'Kaito'
	}).exec().then(function(youth) {
		res.send(youth);
	})
})

// router.put('/updateSettings', function(req, res, next) {
// 	model.Youth.find({
// 		firstName: 'Kaito'
// 	}).exec().then(function(youth) {
// 		console.log(1)
// 		if (req.body.productName) {
// 			console.log(2)
// 			youth.products[0].productName = req.body.productName;
// 			console.log(youth)
// 		}

// 		if (req.body.price) {
// 			console.log(3)
// 			youth.products[0].price = req.body.price
// 		};
// 		console.log(youth)
// 		console.log('woohoo')
// 		youth.save()
// 	}).then(function() {
// 		console.log('woohoo')
// 		res.send(200);
// 	})
// })

// router.put('/updateSettings', function(req, res, next) {
// 	model.Youth.findOneAndUpdate({
// 		firstName: 'Kaito'
// 	}, {
// 		products[0]: {
// 			productName: req.body.productName,
// 			price: req.body.price
// 		}
// 	}, fucntion() {
// 		console.log('PLEASE')
// 		res.send(200)
// 	})
// })

// router.get('/login', function(req, res, next) {
// 	var index = path.join(__dirname, '..', 'public', 'templates', 'login.html');
// 	res.sendFile(index);
// })
// router.get('/signup', function(req, res, next) {
// 	var index = path.join(__dirname, '..', 'public', 'templates', 'signup.html');
// 	res.sendFile(index);
// })

module.exports = router;