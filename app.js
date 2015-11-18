var express = require('express');
var compression = require('compression')
var bodyParser = require('body-parser');
var cors = require("cors");
var path = require('path');

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

app.use(function(err, req, res, next) {

    console.error(err, err.stack);
    res.status(err.status || 500).json({
        message: err.message,
        error: err
    });
});

// START THE SERVER
// =============================================================================
app.listen(9999, function(){

    console.log('API listening on port 9999.');

});

module.exports = app;

