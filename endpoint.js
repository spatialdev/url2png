var express = require('express');
var router = express.Router();
var banquo = require('banquo');
var fs = require('fs');
var path = require('path');
var CronJob = require('cron').CronJob;

// Cron job to clear out exports folder;
new CronJob('00 00 00 * * *', function(){

    var files = fs.readdirSync('exports', function(err, files) {});

    files.filter(function(filename) {

        return path.extname(filename) === '.png';

    }).forEach(function(filename) {
        // Delete file
        fs.unlink('exports/' + filename, function (err) {
            if (err) throw err;
            console.log('successfully deleted ' + filename);
        });
    });

}, null, true, "America/Los_Angeles");



router.post('/',  function (req, res, next) {

    var url = req.body.url || null;

    if(!url) {
        res.status(400).json({message:"No URL to print in post data."});
        return;
    }

    // We are going to capture the web page as a PNG and save it with a random name in the /exports directory
    var randomString = Math.random().toString(36).substr(2, 9);
    var timestamp = Date.now();
    var filePath ="/exports/" + randomString + timestamp + '.png';

    // Print options
    var opts = {
        mode: 'save',
        url: url,
        viewport_width: 1440,
        delay: 5000,
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
        res.status(200).json({message:'success', downloadURL: opts.downloadURL});
    });

    });


module.exports = router;