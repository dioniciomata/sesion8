const router = require('express').Router();
const{
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products');
const auth = require('../config/auth');

/**  
 * @openapi
 * /products:
 *   get:
 *     summary: Productos disponibles
 *     description: entrega una lista de productos
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Todos los productos disponibles
 *         type: json
 */

router.get('/', auth.opcional, getProducts);

/**
 * @openapi
 * /products/{name}:
 *   get:
 *     summary: Producto
 *     parameters:
 *        - in: path
 *          name: name
 *          description: nombre del producto
 *     description: entrega un producto
 *     responses:
 *       200:
 *         description: Informacion del producto
 *         type: json
 */
router.get('/:name', auth.opcional, getProduct);

/**
 * @openapi
 * /products:
 *   post:
 *     summary: Agregar un Producto
 *     security:
 *        - bearer: []
 *     parameters:
 *        - in: body
 *          name: information
 *          description: info del producto
 *     description: Agrega un producto. Necesita autenticacion de Vendededor
 *     responses:
 *       201:
 *         description: Informacion del producto agregado
 *         type: json
 */
router.post('/', auth.isSeller , createProduct);

/**
 * @openapi
 * /products/{name}:
 *   put:
 *     summary: Actuliza un Producto
 *     security:
 *        - bearer: []
 *     parameters:
 *        - in: path
 *          name: nombre del producto
 *          description: info del producto
 *        - in: body
 *          name: information
 *          description: nueva info del producto
 *     description: Actualiza un producto. Necesita autenticacion de Vendededor
 *     responses:
 *       201:
 *         description: Confirmacion del producto actualizado
 *         type: json
 */
router.put('/:name', auth.isSeller , updateProduct);

/**
 * @openapi
 * /products/{id}:
 *   delete:
 *     summary: Borra un Producto
 *     security:
 *        - bearer: []
 *     parameters:
 *        - in: path
 *          name: id
 *          description: id del producto
 *     description: Borra un producto. Necesita autenticacion de Vendededor
 *     responses:
 *       200:
 *         description: Confirmacion del producto borrado
 *         type: json
 */

router.delete('/:id', auth.isSeller, deleteProduct);


module.exports = router;