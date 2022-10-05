const {Sequelize, DataTypes} =require('sequelize');
const sequelize  = require('../config/db');

const God = sequelize.define('God', {
    symbol: {
        type: DataTypes.CHAR(64)
    },
    name:{
        type: DataTypes.CHAR(64)
    },
    
});

module.exports = God;