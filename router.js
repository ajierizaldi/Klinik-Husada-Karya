const express = require('express');
const Router = express.Router();

// index.ejs
Router.get('/', (req, res) => {
    res.render('index');
});