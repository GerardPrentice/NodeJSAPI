var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Order = require('./Order');

// CREATES A NEW Order
router.post('/', function (req, res) {
    Order.create({
            idCliente : req.body.idCliente,
            estadoPedido : req.body.estadoPedido,
            fechaEmision : req.body.fechaEmision,
            fechaEntrega : req.body.fechaEntrega,
            productos : req.body.productos,
        }, 
        function (err, Order) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(Order);
        });
});

// RETURNS ALL THE OrderS IN THE DATABASE
router.get('/', function (req, res) {
    Order.find({}, function (err, Orders) {
        if (err) return res.status(500).send("There was a problem finding the Orders.");
        res.status(200).send(Orders);
    });
});

// GETS A SINGLE Order FROM THE DATABASE
router.get('/:id', function (req, res) {
    Order.findById(req.params.id, function (err, Order) {
        if (err) return res.status(500).send("There was a problem finding the Order.");
        if (!Order) return res.status(404).send("No Order found.");
        res.status(200).send(Order);
    });
});

// DELETES A Order FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Order.findByIdAndRemove(req.params.id, function (err, Order) {
        if (err) return res.status(500).send("There was a problem deleting the Order.");
        res.status(200).send("Order: "+ Order.name +" was deleted.");
    });
});

// UPDATES A SINGLE Order IN THE DATABASE
router.put('/:id', function (req, res) {
    Order.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, Order) {
        if (err) return res.status(500).send("There was a problem updating the Order.");
        res.status(200).send(Order);
    });
});


module.exports = router;