/* jshint node: true */

module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jade: {
      options: {
        pretty: true
      },
      docs: {
        files: [
        {
          expand: true,
          cwd: 'jade',
          src: ['**/*.jade', '!_*.jade'],
          dest: './',
          ext: '.html'
        }
        ]
      }
    },
    less: {
      docs: {
        files: [
        {
          expand: true,
          cwd: 'less',
          src: ['**/*.less', '!_*.less'],
          dest: 'css',
          ext: '.css'
        }
        ]
      }
    },
    watch: {
      options: {
        livereload: 7227
      },
      docs: {
        files: 'jade/*.jade',
        tasks: ['newer:jade:docs']
      },
      docsLess: {
        files: 'less/*.less',
        tasks: ['newer:less:docs']
      }
    }
  });

  grunt.registerTask('default', ['jade', 'less']);
}
