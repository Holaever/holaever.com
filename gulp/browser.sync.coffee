###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

'use strict'

cfg  = require('../config.json')
gulp = require('gulp')
bs   = require('browser-sync')

gulp.task 'bs', ->
  bs
    browser: 'google chrome'
    port: 9022,
    server:
      baseDir: './'
  return
