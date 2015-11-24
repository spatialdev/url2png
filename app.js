"use strict";


// Dependencies
var express = require('express');
var compression = require('compression')
var bodyParser = require('body-parser');
var cors = require("cors");
var path = require('path');
var argv = require('minimist')(process.argv.slice(2));

var port = argv.port || null;


// Check for valid --port argument
if (!(typeof port === 'number') && (port % 1 === 0) && (port > 0) && (port <= 65535)) {
    console.error('Please provide a valid --port argument');
    process.exit(1);
}

// Create the express instance
var app = express();

// compress all requests: gzip/deflate
app.use(compression());

// CORS
app.use(cors());

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Static directory
app.use('/exports', express.static(path.join(__dirname, 'exports')));

// Endpoint configuration
var endpoint = require('./endpoint.js');
app.use('/url2png', endpoint);

// Error handler
app.use(function (err, req, res, next) {

    console.error(err, err.stack);
    res.status(err.status || 500).json({
        message: err.message,
        error: err
    });

});

// START THE SERVER
// =============================================================================
app.listen(port, function () {

    console.log('url2png API listening on port ' + port + '.');

});

module.exports = app;

