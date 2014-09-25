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
      },
      kitchen: {
        files: [
        {
          expand: true,
          cwd: 'kitchen-sink/jade',
          src: ['**/*.jade', '!_*.jade'],
          dest: 'kitchen-sink/',
          ext: '.html'
        }
        ]
      },
      demos: {
        files: [
        {
          expand: true,
          cwd: 'docs-demos/',
          src: ['**/*.jade', '!_*.jade'],
          dest: 'docs-demos/',
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
        tasks: ['less:docs']
      },
      kitchen: {
        files: 'kitchen-sink/jade/*.jade',
        tasks: ['newer:jade:kitchen']
      },
      demos: {
        files: 'docs-demos/*.jade',
        tasks: ['newer:jade:demos']
      },
    }
  });

  grunt.registerTask('default', ['jade', 'less']);
}
