const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const data = require('../data/bikerentals.json');
const addToCart = require('../client/main.js');

const PORT = process.env.PORT || 8080;
const app = express();

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// logging middleware
app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '..', '/public')));

let cart = [];

let util = {
    products: data.products,
    cart,
    addToCart,
};

app.get('/', (req, res, next) => {
    try {
        res.render('index.ejs', { ...util });
    } catch (error) {
        next(error);
    }
});

app.post('/', (req, res, next) => {
    try {
        cart.push(req.body.product);
        console.log('product');
        res.render('index.ejs', { ...util });
    } catch (error) {
        next(error);
    }
});

// error handling endware
app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.')
});

app.listen(PORT, () => {
    console.log(`Running on localhost:${PORT}`);
});

module.exports = app;
