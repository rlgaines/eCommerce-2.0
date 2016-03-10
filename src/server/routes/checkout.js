var express = require('express');
var router = express.Router();
var stripe = require('stripe')(process.env.SRIPE_SECRET_KEY);


router.get('/', function(req, res, next){
	res.render('checkout', {title: 'Checkout'})
})

router.post('/', function(req, res,next) {
    var stripeToken = req.body.stripeToken;
    var amount =  1000;
    console.log(req.body);
    stripe.charges.create({
        card: stripeToken,
        currency: 'usd',
        amount: amount
    },
    function(err, charge) {
        if (err) {
            res.send('error');
        } else {
            res.send('success');
        }
    });
});

module.exports = router;
