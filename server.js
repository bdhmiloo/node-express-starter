'use strict';

// ================== DEPENDENCIES ==================

// Patch console.x methods in order to add timestamp information
require('console-stamp')(console, {pattern: 'dd/mm/yyyy HH:MM:ss.l'});

const config = require('./config/config');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');

// ================== MONGODB ==================

// mongoose.connect(
//     config.MONGO_DB_URI,
//     {useNewUrlParser: true}
// );
// const monDb = mongoose.connection;
//
// monDb.on('error', function () {
//     console.error('MongoDB Connection Error. Please make sure that', config.MONGO_DB_NAME, 'is running.');
// });
//
// monDb.once('open', function callback() {
//     console.info('Connected to MongoDB:', config.MONGO_DB_NAME);
// });

// ================== APP ==================

const server = express();
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(methodOverride('X-HTTP-Method-Override'));
server.use(cors());

const port = config.PORT;
server.set('port', port);

const prefix = config.API_PREFIX;

// ================== ROUTES ==================

// route definitions
const helloRoutes = require('./app/hello/helloRoutes');

// route attaching
server.use(prefix, helloRoutes);

// ================== ERROR HANDLER ==================

// 404
server.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// DEV: does print stacktrace
if (server.get('env') === 'development') {
    server.use(function (err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// PROD: does not print stacktrace
server.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// ================== SERVER ==================

server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
