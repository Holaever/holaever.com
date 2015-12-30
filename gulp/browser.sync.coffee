###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

'use strict'

cfg = require('../config.json')
gulp = require('gulp')
browserSync = require('browser-sync')
$ = require('gulp-load-plugins')()

gulp.task 'browser-sync', ['nodemon'], ->
  browserSync.init null,
    proxy: 'http://localhost:3000'
    files: ['../public/**/*.*']
    browser: 'google chrome'
    port: 9022
  return
