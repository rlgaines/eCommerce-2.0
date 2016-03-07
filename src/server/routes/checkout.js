var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
	res.render('products', {title: 'Checkout'})
})

module.exports = router;
