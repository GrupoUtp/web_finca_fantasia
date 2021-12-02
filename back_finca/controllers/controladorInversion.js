const Inversion = require("../models/inversion");

module.exports.comentar_get = (req, res) => {
    Inversion.find().then((respuesta) => {
        console.log(respuesta);
        res.send(respuesta);
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({ error});
    });    
};

module.exports.comentar_post = (req, res) => {
    const { comentario} = req.body;
    // const fecha = new Date(Date.UTC(date.year, date.month - 1, date.day));
    Inversion.create({comentario})
        .then((respuesta) => {
            console.log(respuesta);
            res.status(200).json(respuesta);
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json(error);
        });       
};

module.exports.comentar_delete = (req, res) => {
    console.log(req);
    res.send("Delete Inversiones");
};