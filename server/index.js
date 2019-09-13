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
app.use(morgan('dev'))

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '..', 'views'));
    res.render('index.ejs', { bikes: data.products });
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