/*
 * grunt-preloader-manifest-generator
 * https://github.com/shadowford/grunt-preloader-manifest-generator
 *
 * Copyright (c) 2013 Lachlan Ford
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
   
    copy: {
      data: {
        files: [
          {dest: 'test/result/test.js', src:'test/src/test.js'}
        ]
      }
    },

    templateFile: {
      data : {
        file : 'test/result/test.js',
        options : {
          data : {
            root   : '',
            assets : 'assets/',
            images : 'assets/images/'
          }
        }
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['copy', 'templateFile']);

};
