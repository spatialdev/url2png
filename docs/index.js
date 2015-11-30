/**
 * Created by rgwozdz on 11/25/15.
 */
"use strict";

var nunjucks = require('nunjucks');
var swaggerJSON = require('../api-documentation.json');
var lodash = require('lodash');
var fs = require('fs');
var jsonRefs = require('json-refs');

var apiModel = jsonRefs.resolveLocalRefs(swaggerJSON).resolved;

nunjucks.configure({ autoescape: true });

// Swagger spec may lead to a high degree of nesting in response objects (objects within objects with objects, etc). This
// function flattens that schmema and assigns each schema item a "depth" property.  The outer object wrapper has depth -1.
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

// Parse the Swagger schema and reform to our liking
lodash.forIn(apiModel.paths, function (path) {

    lodash.forIn(path, function (verb) {

        lodash.forIn(verb.responses, function (response) {

            response.schemaArr = [];

            recurvsiveFlatten(undefined, response.schema, response.schemaArr, -1);

        });

    });

});

apiModel.imageDir = "/docs/images/";

try {
    fs.writeFileSync('api-doc.md', nunjucks.render('docs/templates/snippet.md', apiModel));
    fs.writeFile('api-doc.html', nunjucks.render('docs/templates/shell.html', apiModel));
    console.log('Static docs created.');
    process.exit();
}
catch (e){
    console.error(e);
    process.exit(1);
}



