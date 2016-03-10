var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
	res.render('checkout', {title: 'Checkout'})
})

router.post('/', function(req, res,next) {
    var stripeToken = req.body.stripeToken;
    var amount =  req.body.stripeAmount;
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
    res.json(req.body)
});

module.exports = router;
