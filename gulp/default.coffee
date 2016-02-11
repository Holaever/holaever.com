###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

'use strict'

cfg = require('../config.json')
gulp = require('gulp')
run_sequence = require('run-sequence')
clp = require('./clp.coffee')

gulp.task 'default', (cb) ->
  if clp.preview
    run_sequence 'browser-sync', cb
  else if clp.nopreprocess
    run_sequence 'browser-sync', 'watch', cb
  else if clp.precommit
    run_sequence 'clean', 'copy', 'preen', 'bowernmiz', [
      'sass'
      'cs'
      'react'
      'cs-react'
      'sprites'
    ], 'compress', cb
  else
    run_sequence 'clean', 'copy', 'preen', 'bowernmiz', [
      'sass'
      'cs'
      'react'
      'cs-react'
      'sprites'
    ], 'browser-sync', 'watch', cb
  return
