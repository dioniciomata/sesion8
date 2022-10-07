const Order = require('../models/orders');

function createOrder(req,res){
    const body = req.body;
    Order.create(body).then(order=>{
     return res.status(201).json(order);
    });
}

async function getOrder(req, res){
    const id = req.params.id;
    const order = await Order.findOne({where: {id}}) ;
    return res.status(201).json(order);
}

async function getOrders(req, res){
    const orders = await Order.findAll();
    return res.status(201).json(orders);
}

async function updateOrder(req, res){
    const id = req.params.id;
    const order = req.body;
    const update = await Order.update(order, {where: {id}});
    const order_updated = await Order.findByPk(update[0]);
    return res.status(201).json({updated:"true"});
}

async function deleteOrder(req, res){
    const id = req.params.id;
    const deleted= Order.destroy(
        {where: {id: id}}
    ); //{id: id} or {id}
    res.status(200).json({deleted : "order deleted"});
}

module.exports = {
    getOrder,
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder
}