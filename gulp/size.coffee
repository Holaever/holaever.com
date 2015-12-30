###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

'use strict'

gulp = require('gulp')
parse_args = require('minimist')
lazypipe = require('lazypipe')
$ = require('gulp-load-plugins')()
clp = require('./clp.coffee')

html_size = lazypipe().pipe(->
  $['if'] clp.size, $['if']('*.html', $.size(title: 'html'))
)

css_size = lazypipe().pipe(->
  $['if'] clp.size, $['if']('*.css', $.size(title: 'css'))
)

js_size = lazypipe().pipe(->
  $['if'] clp.size, $['if']('*.js', $.size(title: 'javascript'))
)

module.exports =
  html_size: html_size
  css_size: css_size
  js_size: js_size
