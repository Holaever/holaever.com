###
# Author: iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
# Last Update (author): iTonyYo <ceo@holaever.com> (https://github.com/iTonyYo)
###

require 'coffee-script/register'

cfg = require('../config.json')
gulp = require('gulp')
$ = require('gulp-load-plugins')()
parse_args = require('minimist')

module.exports = parse_args(process.argv.slice(2), 'boolean': cfg.clp)
