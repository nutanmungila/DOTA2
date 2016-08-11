'use strict';
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    watch:{
      scripts:{
        files:['sass/*.scss'],
        tasks:['sass']
      }
    },

    sass: {

        dist: {
            files: {
                'css/style.css' : 'sass/style.scss'
            }
        }
    }
 });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
};
//'main.css': 'main.scss'
