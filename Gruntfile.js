module.exports = function (grunt) {
  require('time-grunt')(grunt)
  var webpackGruntfile = require('./webpack_gruntfile')
  var karmaGruntfile = require('./karma_gruntfile.js')
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      webpack: {
        files: ['app/**/*.js'],
        tasks: ['webpack:dev']
      }
    },
    // 'jshint': {
    //   all: {
    //     src: [
    //       'Gruntfile.js',
    //       'karma_gruntfile.js',
    //       'webpack_gruntfile.js'
    //     ],
    //     options: {
    //       esversion: 6,
    //       asi: true,
    //       reporter: require('jshint-stylish')
    //     }
    //   }
    // },
    webpack: webpackGruntfile,
    karma: karmaGruntfile
  })

  grunt.loadNpmTasks('grunt-contrib-watch')
  // grunt.loadNpmTasks('grunt-jsxhint')
  grunt.loadNpmTasks('grunt-webpack')
  grunt.loadNpmTasks('grunt-karma')

  grunt.registerTask('default', ['webpack:dev'])
}
