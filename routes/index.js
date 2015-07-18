var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/manager', function(req, res, next) {
	var index = path.join(__dirname, '..', 'views', 'manager.html');
	res.sendFile(index);
});

module.exports = router;

