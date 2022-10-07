const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const crypto = require('crypto');                             
const jwt = require('jsonwebtoken');                          
//Importando módulo jsonwebtoken, pendiente de instalar.
const secret = require('../config/secret');
// ???? es un misterio que resolveremos en la última sesión

const Seller = sequelize.define('Seller',{
    username:{
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
        validate : {
            //isLowercase: true,
            is: /^[a-zA-Z0-9_-]+$/,
        }
    },
    name:{
        type: DataTypes.STRING(64),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password_hash:{
        type: DataTypes.TEXT,
        // allowNull: false
    },
    password_salt:{
        type: DataTypes.TEXT,
        // allowNull: false
    }
});

Seller.crearPassword = function (password) {
    const salt = crypto.randomBytes(16).toString("hex"); // generando una "salt" random para cada usuario
    const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 512, "sha512")
    .toString("hex"); // generando un hash utilizando la salt
    return { salt : salt, hash: hash }
}

Seller.validarPassword = function (password, seller_salt, seller_hash)  {
    const hash = crypto
      .pbkdf2Sync(password, seller_salt, 10000, 512, "sha512")
      .toString("hex");
    return seller_hash === hash;
}

Seller.generateJWT = function(seller){
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60); // 60 días antes de expirar

    return jwt.sign({
        id: seller._id,
        username: seller.username,
        exp: parseInt(exp.getTime() / 1000), // En segundos
    }, secret);
}

 
module.exports = Seller;