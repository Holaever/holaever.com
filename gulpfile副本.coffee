require 'coffee-script/register'

gulp = require('gulp')
nodemon = require('gulp-nodemon')
plumber = require('gulp-plumber')
livereload = require('gulp-livereload')

gulp.task 'develop', ->
  livereload.listen()
  nodemon(
    script: 'app.coffee'
    ext: 'js coffee jade'
    stdout: false
  )
  .on 'readable', ->
      @stdout.on 'data', (chunk) ->
        if /^Express server listening on port/.test(chunk)
          livereload.changed __dirname
        return
      @stdout.pipe process.stdout
      @stderr.pipe process.stderr
    return
  return

gulp.task 'default', [
  'sass'
  'develop'
  'watch'
]
