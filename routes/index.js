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

router.get("/charities", function(req, res, next) {
	model.Charity.find({}).exec()
		.then(function(data) {
			console.log(data);
			res.json(data);
		})
		.then(null, function(err) {
			res.json(err);
		})
})

router.get('/youthList', function(req, res, next) {

	model.Youth.find().exec().then(function(youthList) {
		res.json(youthList)
	})
});
router.get('/youthList/detail/:firstName', function(req, res, next) {
	model.Youth.findOne({ firstName: req.params.firstName }).exec()
	//or {id: $stateParams.id} ??
		.then(function(biz) {
			res.json(biz)
		})
});

router.get('/youth', function(req, res, next) {
	console.log(req.body)
	model.Youth.find({
		firstName: 'Kaito'
	}).exec().then(function(youth) {
		res.send(youth);
	})
})

router.post('/youth', function(req, res, next) {
	console.log("DOES THIS WORK");
	console.log("req.body", req.body);
	// req.body.products = new model.Product({
	// 	productName: req.body.products
	// });
	// console.log(req.body);
	// model.Youth.create(req.body, function(err, data) {
	// 	if (err) console.log(err);
	// 	else {
	// 		console.log(data);
	// 		res.json(data);
	// 	}
	// })

	model.Youth.find({
		firstName: "Kaito"
	}).exec().then(function(youth) {
		youth[0].charityOfChoice = req.body.charityOfChoice;
		console.log(youth[0])
		youth[0].save(function(err) {
			if (err) console.log(err);
			else {
				console.log(youth)
				res.send(youth);
			}
		})
	})
})

router.post('/addGoal', function(req, res, next) {
	console.log(req.body.data.description)
	model.Youth.findOneAndUpdate({
		'firstName': 'Kaito'
	}, {
		'goalDescription': req.body.data.description,
		'goalAmount': req.body.data.amount
	}, function(err, data) {
		console.log(data, 'here')
	})
})


router.put('/updateSettings', function(req, res, next) {
console.log(req.body.price)
model.Youth.findOneAndUpdate({ 'firstName': 'Kaito' , 'products.secret':'thisOne'}, {$set: {"products.$.price" : req.body.price, "products.$.productName" : req.body.productName}}, function(err, data){
console.log(err, data)
res.send(data)
})
})

router.post('/addTodo', function(req, res, next) {
	console.log(req.body)
	var newTodo = new model.Todo();
	newTodo.todo = req.body.todo
	model.Youth.findOneAndUpdate({
		'firstName': 'Kaito'
	}, {
		$push: {
			'todo': newTodo
		}
	}, function(err, data) {
		console.log('here')
	})
})

router.post('/updateTodo', function(req, res, next) {
	// console.log(req.body.todo, req.body.done)
	model.Youth.findOneAndUpdate({
		'firstName': 'Kaito',
		'todo.todo': req.body.todo
	}, {
		$set: {
			'todo.$.done': req.body.done
		}
	}, function(err, data) {
		console.log(err, data)
	})
})

router.post('/removeTodo', function(req, res, next) {
	console.log(req.body.todo)
	model.Youth.findOneAndUpdate({
		'firstName': 'Kaito'
	}, {
		$pull: {
			'todo': {
				'todo': req.body.todo
			}
		}
	}, function(err, data) {
		console.log('a', err, data)
	})
})

router.put('/addProduct', function(req, res, next) {
		console.log(req.body)
		var newProduct = new model.Product()
		newProduct.productName = req.body.name;
		newProduct.price = req.body.price;
		// newProduct.cost = req.body.cost;
		model.Youth.findOneAndUpdate({
			'firstName': 'Kaito'
		}, {
			$push: {
				'products': newProduct
			}
		}, function(err, data) {
			console.log('here')
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