/**
 * Created by rgwozdz on 11/25/15.
 */
"use strict";

var nunjucks = require('nunjucks');
var swaggerJSON = require('./api-documentation.json');
var lodash = require('lodash');
var fs = require('fs');
var jsonRefs = require('json-refs');

var apiModel = jsonRefs.resolveLocalRefs(swaggerJSON).resolved;

nunjucks.configure({ autoescape: true });

function recurvsiveFlatten(name, obj, arr, depth){

        if (obj.hasOwnProperty('items')) {

            var type = obj.items.type;

            if(obj.type === 'array') {
                type = lodash.capitalize(type) + '[]';
            }

            arr.push({name: name, type: type, depth: depth});

            lodash.forIn(obj.items.properties, function(val, key){

                    recurvsiveFlatten(key, val, arr, depth + 1);

            });

        } else if (obj.hasOwnProperty('properties')) {

            arr.push({name: name, type: 'Object', depth: depth});

            lodash.forIn(obj.properties, function(val, key){

                recurvsiveFlatten(key, val, arr, depth + 1);

            });
        } else {

            arr.push({name: name, type: obj.type, description: obj.description, depth: depth});
        }




}

lodash.forIn(apiModel.paths, function (path) {

    lodash.forIn(path, function (verb) {

        lodash.forIn(verb.responses, function (response) {

            response.schemaArr = [];

            recurvsiveFlatten(undefined, response.schema, response.schemaArr, -1);

            console.log(response.schemaArr)
        });

    });

});

fs.writeFile('doc-creation/doc.md', nunjucks.render('doc-creation/api-doc-template-snippet.html', apiModel), function (err) {
    if (err) {
        console.error(err);
        throw err;
    }
    console.log('It\'s saved!');
    process.exit();
});

fs.writeFile('doc-creation/doc.html', nunjucks.render('doc-creation/api-doc-template.html', apiModel), function (err) {
    if (err) {
        console.error(err);
        throw err;
    }
    console.log('It\'s saved!');
    process.exit();
});
