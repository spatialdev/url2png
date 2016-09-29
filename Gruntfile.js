/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.

    watch: {

      documentation: {
        files: ['api-documentation.json' ],
        tasks: ['static_api_docs:main']
      }
    },
    static_api_docs: {

      main: {
        src: 'api-documentation.json',
        dest: 'docs'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('static-api-docs');

  // Default task.
  //grunt.registerTask('default', ['jshint', 'nodeunit']);
  //grunt.registerTask('default', ['static-api-docs']);

};
