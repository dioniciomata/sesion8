const router = require('express').Router();
const{
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products');
const auth = require('../config/auth')

/* 
* @swagger
* /products/
* get:
*     summary: productos disponibles
*     description: entrega lista de productos
*     produces: 
*         - application/json
*     responses:
*         200: 
*             description: todos los productos
*             type: json
*/
router.get('/', auth.opcional, getProducts);

router.get('/:name', auth.opcional, getProduct);

router.post('/', auth.isSeller , createProduct);

router.put('/:name', auth.isSeller , updateProduct);

router.delete('/:id', auth.isSeller, deleteProduct);


module.exports = router;