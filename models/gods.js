const {Sequelize, DataTypes} =require('sequelize');
const sequelize  = require('../config/db');

const God = sequelize.define('God', {
    name:{
        symbol: {
            type: DataTypes.STRING(64)
        },
            type: DataTypes.STRING(64)
    }
});

module.exports = God;