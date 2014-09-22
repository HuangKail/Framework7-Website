/* jshint node: true */

module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jade: {
      docs: {
        options: {
          pretty: true
        },
        files: [
        {
          expand: true,
          cwd: 'docs/jade',
          src: ['**/*.jade', '!_*.jade'],
          dest: 'docs/',
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
          cwd: 'docs/less',
          src: ['**/*.less', '!_*.less'],
          dest: 'docs/css',
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
        files: 'docs/jade/*.jade',
        tasks: ['newer:jade:docs']
      },
      docsLess: {
        files: 'docs/less/*.less',
        tasks: ['newer:less:docs']
      }
    }
  });

  grunt.registerTask('default');
}
