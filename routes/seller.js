const router = require('express').Router();
const {
    signSeller, 
    logSeller, 
    getSeller, 
    deleteSeller
} = require('../controllers/seller');
const auth = require('../config/auth')
const { opcional } = require('../config/auth');

router.get('/', auth.opcional, getSeller);
router.post('/signup', auth.opcional, signSeller);
router.post('/login', auth.opcional, logSeller);
router.delete('/:id', auth.isSeller, deleteSeller);

module.exports = router;