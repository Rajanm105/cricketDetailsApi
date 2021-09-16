require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors =  require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(cors("Access-Control-Allow-Origin: *"))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.render('index')
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${5000}`)
})