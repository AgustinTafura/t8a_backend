require('dotenv').config()
var cors = require('cors')
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//database conection
require('./database')

const indexRouter = require('./routes/index');
const app = express();

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    const {name, message} = err
    res.status(err.status || 500);
    res.json({name,message})
    
});


module.exports = app;
