"use strict";


// Dependencies
var express = require('express');
var compression = require('compression')
var bodyParser = require('body-parser');
var cors = require("cors");
var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var settings, rollbar;
var initRollbar = true;

var port = argv.port || null;

// Check for valid --port argument
if (!(typeof port === 'number') && (port % 1 === 0) && (port > 0) && (port <= 65535)) {
    console.error('Please provide a valid --port argument');
    process.exit(1);
}

try {
    settings = require('./common/settings');
} catch (e) {
    initRollbar = false;
    console.log("Warning ===> No settings file included - Rollbar not initialized");
}

// Check for rollbar settings
if(initRollbar) {
    if (typeof settings.rollbarToken !== "undefined") {
        rollbar = require("rollbar");
        rollbar.init(settings.rollbarToken);
    }
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


// application -------------------------------------------------------------
app.use(function(req, res){
    res.sendFile(__dirname + "/docs/api-doc.html");
});

// Error handler
app.use(function (err, req, res, next) {

    var status = err.status || 500;

    // Log the error if Rollbar is setup
    if(initRollbar && typeof settings.rollbarToken !== 'undefined'
        && [400, 401, 404].indexOf(status) === -1) {
        rollbar.handleErrorWithPayloadData(err, {level: "error", fingerprint: err.message}, req);
    }

    res.status(status).json({
        message: err.message,
        status: status
    });

});

// START THE SERVER
// =============================================================================
app.listen(3001, function () {

    var launchMessage = 'url2png API listening on port ' + 3001 + ' on ' + Date();

    console.log(launchMessage);

    if (rollbar !== undefined) {
        rollbar.reportMessage(launchMessage, "info");
    }
});

module.exports = app;

