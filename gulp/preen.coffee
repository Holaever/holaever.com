###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

'use strict'

cfg = require('../config.json')
gulp = require('gulp')
$ = require('gulp-load-plugins')()
prn = require('preen')

gulp.task 'preen', (cb) ->
  prn.preen {}, cb
  return
