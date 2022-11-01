require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');
const ejs = require('ejs');

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});