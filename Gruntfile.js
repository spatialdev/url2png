/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.

    static_api_docs: {
      main: {
        src: "api-documentation.yaml",
        dest: "docs",
        options: {
          filename: "api-docs",
          supressMD: true
        }
      }
    },

    watch: {

      documentation: {
        files: ['api-documentation.yml' ],
        tasks: ['static_api_docs:test']
      }
    }
  });

  grunt.loadNpmTasks('static-api-docs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  //grunt.registerTask('default', ['jshint', 'nodeunit']);
  grunt.registerTask('default', ['static_api_docs:main']);

};
