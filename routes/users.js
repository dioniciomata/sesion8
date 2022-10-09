const router = require('express').Router();
const {
    signUp, 
    logIn, 
    getUsers, 
    deleteUser
} = require('../controllers/users');
const auth = require('../config/auth');
const { opcional } = require('../config/auth');

router.get('/', auth.opcional , getUsers);
router.post('/signup', auth.opcional, signUp);
router.post('/login', auth.opcional ,logIn);
router.delete('/:id', auth.opcional ,deleteUser);

module.exports = router;