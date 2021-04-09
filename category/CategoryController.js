var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Category = require('./Category');

// CREATES A NEW Category
router.post('/', function (req, res) {
    Category.create({
            nombre : req.body.nombre,
            idHijos : req.body.idHijos,
            nivel : req.body.nivel
        }, 
        function (err, Category) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(Category);
        });
});

// RETURNS ALL THE CategoryS IN THE DATABASE
router.get('/', function (req, res) {
    Category.find({}, function (err, Categorys) {
        if (err) return res.status(500).send("There was a problem finding the Categorys.");
        res.status(200).send(Categorys);
    });
});

// GETS A SINGLE Category FROM THE DATABASE
router.get('/:id', function (req, res) {
    Category.findById(req.params.id, function (err, Category) {
        if (err) return res.status(500).send("There was a problem finding the Category.");
        if (!Category) return res.status(404).send("No Category found.");
        res.status(200).send(Category);
    });
});

// DELETES A Category FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Category.findByIdAndRemove(req.params.id, function (err, Category) {
        if (err) return res.status(500).send("There was a problem deleting the Category.");
        res.status(200).send("Category: "+ Category.name +" was deleted.");
    });
});

// UPDATES A SINGLE Category IN THE DATABASE
router.put('/:id', function (req, res) {
    Category.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, Category) {
        if (err) return res.status(500).send("There was a problem updating the Category.");
        res.status(200).send(Category);
    });
});


module.exports = router;