###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

'use strict'

cfg = require('../config.json')
gulp = require('gulp')
$ = require('gulp-load-plugins')()


gulp.task 'nodemon', (cb) ->
  started = false
  $.nodemon(
    script: 'app.coffee'
    ext: 'js coffee jade'
    stdout: false
  ).on 'start', ->
    # to avoid nodemon being started multiple times
    # thanks @matthisk
    if !started
      cb()
      started = true
    return
