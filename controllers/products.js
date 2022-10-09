const Product = require('../models/products');

function createProduct(req,res){
    const body = req.body;
    Product.create(body).then(product=>{
     return res.status(201).json(product);
    });
}

async function getProduct(req, res){
    const name = req.params.name;
    const product = await Product.findOne({where: {name}}) ;
    return res.status(201).json(product);
}

async function getProducts(req, res){
    const products = await Product.findAll();
    return res.status(201).json(products);
}

async function updateProduct(req, res){
    const name = req.params.name;
    const product = req.body;
    const update = await Product.update(product, {where: {name}});
    return res.status(201).json({updated:"true"});
}

async function deleteProduct(req, res){
    const id = req.params.id;
    const deleted= Product.destroy(
        {where: {id: id}}
    ); //{id: id} or {id}
    res.status(200).json({deleted : "Product deleted"});
}

module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}