var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
var CategoryController = require('./category/CategoryController');
var CommentaryController = require('./category/CommentaryController');
var OrderController = require('./category/OrderController');
var ProductsController = require('./category/ProductsController');
app.use('/users', UserController);
app.use('/categorys', CategoryController);
app.use('/commentarys', CommentaryController);
app.use('/orders', OrderController);
app.use('/products', ProductsController);
module.exports = app;