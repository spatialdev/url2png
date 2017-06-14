"use strict";

var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var CronJob = require('cron').CronJob;
const CustomError = require('./common/error');

var PNGEXPORTDIRECTORY = 'exports';

var childProcess = require('child_process');
var phantomjs = require('phantomjs-prebuilt');
var binPath = phantomjs.path;

// Cron job to clear out exports folder;
new CronJob('00 00 00 * * *', function(){

    // Get files in export directory
    var files = fs.readdirSync(PNGEXPORTDIRECTORY);

    // Filter list of files to those with .png extension and then delete
    files.filter(function (filename) {

        return path.extname(filename) === '.png';

    }).forEach(function(filename) {
        // Delete file
        fs.unlink(PNGEXPORTDIRECTORY + filename, function (err) {
            if (err) throw err;
            console.log('successfully deleted ' + filename);
        });
    });

}, null, true, "America/Los_Angeles");


// Add the POST endpoint for generating a PNG from a URL
router.post('/',  function (req, res, next) {

    // Get POST data
    var url = req.body.url || null;
    var viewportWidth = req.body.viewport_width || 1440;
    var delay = req.body.delay || 200;

    // If no url, return 400 error
    if(!url) {
        return next(new CustomError('No URL to print in post data.', 400));
    }

    // We are going to capture the web page as a PNG and save it with a random name in the designated export directory
    var randomString = Math.random().toString(36).substr(2, 9);
    var timestamp = Date.now();
    var filePath ="/exports/" + PNGEXPORTDIRECTORY + randomString + timestamp + '.png';

    // Print options
    var opts = {
        mode: 'save',
        url: url,
        viewport_width: viewportWidth.toString(),
        delay: parseInt(delay),
        out_file: '.' + filePath,
        downloadURL: filePath
    };

    // set up rasterize.js arguments
    // Usage: rasterize.js URL filename [paperwidth*paperheight|paperformat] [timeout]
    var childArgs = [
        path.join(__dirname, 'rasterize.js'),
        url,
        opts.out_file,
        viewportWidth,
        delay
    ];

    childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
        // handle results
        if (err || stderr) {
            console.log(err);
            console.log(stderr);
            return next(new CustomError(err.message, 500));
        }
        console.log(stdout);

        // Success; send 200 and the URL of the image. Will be deleted with Cron job.
        res.status(200).json({message:'success', downloadURL: opts.downloadURL});
    })

});

module.exports = router;