/*
  ==  Development grunt file
      - Only used the Website.Frontend folder
*/

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['public/js/main.js', 'public/js/core/*.js']
    },
    watch: {
      scripts: {
        files: ['public/js/main.js', 'public/js/core/*.js'],
        tasks: ['jshint'],
        options: {
          interrupt: true
        },
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('dev', ['watch', 'jshint']);
  grunt.registerTask('default', ['jshint']);
};
