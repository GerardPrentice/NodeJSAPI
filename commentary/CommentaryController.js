var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Commentary = require('./Commentary');

// CREATES A NEW Commentary
router.post('/', function (req, res) {
    Commentary.create({
            titulo : req.body.titulo,
            descripcion : req.body.descripcion,
            fecha : req.body.fecha,
            id_Producto : req.body.id_Producto
        }, 
        function (err, Commentary) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(Commentary);
        });
});

// RETURNS ALL THE CommentaryS IN THE DATABASE
router.get('/', function (req, res) {
    Commentary.find({}, function (err, Commentarys) {
        if (err) return res.status(500).send("There was a problem finding the Commentarys.");
        res.status(200).send(Commentarys);
    });
});

// GETS A SINGLE Commentary FROM THE DATABASE
router.get('/:id', function (req, res) {
    Commentary.findById(req.params.id, function (err, Commentary) {
        if (err) return res.status(500).send("There was a problem finding the Commentary.");
        if (!Commentary) return res.status(404).send("No Commentary found.");
        res.status(200).send(Commentary);
    });
});

// DELETES A Commentary FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Commentary.findByIdAndRemove(req.params.id, function (err, Commentary) {
        if (err) return res.status(500).send("There was a problem deleting the Commentary.");
        res.status(200).send("Commentary: "+ Commentary.name +" was deleted.");
    });
});

// UPDATES A SINGLE Commentary IN THE DATABASE
router.put('/:id', function (req, res) {
    Commentary.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, Commentary) {
        if (err) return res.status(500).send("There was a problem updating the Commentary.");
        res.status(200).send(Commentary);
    });
});


module.exports = router;