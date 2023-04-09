const express = require('express');
const app = express();
const mongoose = require('./config/dbConfig.js');
const bodyParser = require('body-parser');
require('dotenv').config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => {
    console.log('Database connected');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = app.listen(5000, () => {
  console.log('Listening on port 5000');
});
