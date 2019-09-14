const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const data = require('../data/bikerentals.json');

const PORT = process.env.PORT || 8080;
const app = express();

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// logging middleware
app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '..', '/public')));

app.get('/', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views'));
    try {
        res.render('index.ejs', { products: data.products });
    } catch (error) {
        next(error);
    }
});

app.get('/:productId', (req, res, next) => {
    try {
        const productId = +req.params.productId;
        const product = data.products.filter(el => el.id === productId)[0];
        console.log('product', product);
        res.render('index.ejs', { product });
    } catch (error) {
        next(error);
    }
});

// error handling endware
app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
});

app.listen(PORT, () => {
    console.log(`Running on localhost:${PORT}`);
});

module.exports = app;
