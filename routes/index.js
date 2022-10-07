const router = require('express').Router();
const users = require('./users');
const seller = require ('./seller');
const products = require ('./products');
const orders = require ('./orders');

// const {signUp, logIn} = require('../controllers/users');

router.get('/', (req,res) => {
    res.json({'info':'Welcome to BeduShop API secured'})
});


router.use('/users', users);
router.use('/seller', seller);
router.use('/products', products);
router.use('/orders', orders);


module.exports = router;