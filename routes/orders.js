const router = require('express').Router();
const{
    getOrder,
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder
} = require('../controllers/orders');
const auth = require('../config/auth');

router.get('/', auth.opcional, getOrders);
router.get('/:id', auth.opcional, getOrder);
router.post('/', auth.opcional , createOrder);
router.put('/:id', auth.isSeller , updateOrder);
router.delete('/:id', auth.isSeller, deleteOrder);

module.exports = router;