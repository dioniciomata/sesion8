const {Sequelize, DataTypes} =require('sequelize');
const sequelize  = require('../config/db');
const Product = require('./products');
const User = require('./users');

const Order = sequelize.define('Order', {
    payment: {
        type: DataTypes.STRING(8),
        allowNull: false
    },
    description:{
        type: DataTypes.STRING(64)
    },
});


Order.belongsTo(Product);
Product.hasOne(Order);
Order.belongsTo(User);
User.hasOne(Order);

module.exports = Order;