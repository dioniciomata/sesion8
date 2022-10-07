const {Sequelize, DataTypes} =require('sequelize');
const sequelize  = require('../config/db');
const Seller = require('./seller');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING(64),
        allowNull: false
    },
    price:{
        type: DataTypes.CHAR(64),
        allowNull: false
    },
    description:{
        type: DataTypes.CHAR(64)
    },
    category:{
        type: DataTypes.CHAR(64)
    },
    rating:{
        type: DataTypes.CHAR(64)
    },
    
});


Seller.hasMany(Product);
Product.belongsTo(Seller);

module.exports = Product;