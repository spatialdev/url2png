"use strict";

var express = require('express');
var router = express.Router();
var banquo = require('banquo');
var fs = require('fs');
var path = require('path');
var CronJob = require('cron').CronJob;

var PNGEXPORTDIRECTORY = 'exports';

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
    var delay = req.body.delay || 5000;

    // If no url, return 400 error
    if(!url) {
        res.status(400).json({message:"No URL to print in post data."});
        return;
    }

    // We are going to capture the web page as a PNG and save it with a random name in the designated export directory
    var randomString = Math.random().toString(36).substr(2, 9);
    var timestamp = Date.now();
    var filePath ="/" + PNGEXPORTDIRECTORY + randomString + timestamp + '.png';

    // Print options
    var opts = {
        mode: 'save',
        url: url,
        viewport_width: viewportWidth,
        delay: delay,
        out_file: '.' + filePath,
        downloadURL: filePath
    };

    // Use banquo to capture the web page at the posted URL
    banquo.capture(opts, function(err, imageData){
        if (err) {
            console.log(err);
            res.status(500).json({message:err.message, error:err});
            return;
        }

        // Success; send 200 and the URL of the image. Will be deleted with Cron job.
        res.status(200).json({message:'success', downloadURL: opts.downloadURL});
    });

});

module.exports = router;