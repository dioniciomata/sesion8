const Seller = require('../models/seller');
const User = require('../models/users')

async function getSeller(req, res){
    const seller = await Seller.findAll();
    return res.status(201).json(seller);
}

async function deleteSeller(req, res){
    const id = req.params.id;
    const deleted = Seller.destroy(
        {where: {id}}
    ); //{id: id} or {id}
    res.status(200).json({deleted : "deleted"});
}

async function signSeller(req,res){
    const body = req.body;
    try {
        const seller = await Seller.create(body);
        const {salt, hash} = Seller.crearPassword(body['password']);
        seller.password_salt = salt;
        seller.password_hash = hash;
        await seller.save();
        res.status(201).json(seller);
    } catch (err) {
        if (["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(err.name)){
            return res.status(400).send(err.name)
        }
        else {
            throw err
        }
    }
    
}

async function logSeller(req,res){
    const body = req.body;
    const seller = await Seller.findOne({where: {username: body["username"]}});
    // return res.status(200).send("test works")
    if (!seller){
        return res.status(404).json({error: "seller not found"})
    }
    if (Seller.validarPassword(body['password'], seller.password_salt, seller.password_hash) ){
        return res.status(200).json({
            user: seller.username,
            email: seller.email,
            token: Seller.generateJWT(seller),
        }); // método que nos regrese una representación en JSON del usuario ya autenticado JWT
    } else {
        return res.status(400).json({mensaje: "incorrect"})
    }
}

module.exports = {signSeller, logSeller, getSeller, deleteSeller};