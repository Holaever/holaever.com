###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

'use strict'

cfg          = require '../config.json'
gulp         = require 'gulp'
run_sequence = require 'run-sequence'
clp          = require './clp.coffee'

gulp.task 'default', (cb) ->
  if clp.preview
    run_sequence 'bs', cb
  else if clp.nopreprocess
    run_sequence 'bs', 'watch', cb
  else if clp.precommit
    run_sequence 'clean', 'copy', 'preen', 'bowernmiz', [
      'sass'
      'react'
      'cs'
      'sprites'
    ], 'compress', cb
  else
    run_sequence 'clean', 'copy', 'preen', 'bowernmiz', [
      'sass'
      'react'
      'cs'
      'sprites'
    ], 'bs', 'watch', cb
  return
