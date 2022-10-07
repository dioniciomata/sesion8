const router = require('express').Router();
const {
    signSeller, 
    logSeller, 
    getSeller, 
    deleteSeller
} = require('../controllers/seller');
const auth = require('../config/auth')

router.get('/', auth.isSeller, getSeller);
router.post('/signup', signSeller);
router.post('/login', logSeller);
router.delete('/:id', auth.isSeller, deleteSeller);

module.exports = router;