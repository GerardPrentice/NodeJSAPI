var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Product = require('./Product');

// CREATES A NEW Product
router.post('/', function (req, res) {
    Product.create({
            nombre : req.body.nombre,
            descripcion : req.body.descripcion,
            visitas : req.body.visitas,
            valoracion : req.body.valoracion,
            idProveedor : req.body.idProveedor,
            idCategoria : req.body.idCategoria,
            unidad : req.body.unidad,
            precioUnidad : req.body.precioUnidad,
            stock : req.body.stock,
            imagenesRefereciales : req.body.imagenesRefereciales,
        }, 
        function (err, Product) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(Product);
        });
});

// RETURNS ALL THE ProductS IN THE DATABASE
router.get('/', function (req, res) {
    Product.find({}, function (err, Products) {
        if (err) return res.status(500).send("There was a problem finding the Products.");
        res.status(200).send(Products);
    });
});

// GETS A SINGLE Product FROM THE DATABASE
router.get('/:id', function (req, res) {
    Product.findById(req.params.id, function (err, Product) {
        if (err) return res.status(500).send("There was a problem finding the Product.");
        if (!Product) return res.status(404).send("No Product found.");
        res.status(200).send(Product);
    });
});

// DELETES A Product FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err, Product) {
        if (err) return res.status(500).send("There was a problem deleting the Product.");
        res.status(200).send("Product: "+ Product.name +" was deleted.");
    });
});

// UPDATES A SINGLE Product IN THE DATABASE
router.put('/:id', function (req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, Product) {
        if (err) return res.status(500).send("There was a problem updating the Product.");
        res.status(200).send(Product);
    });
});


module.exports = router;