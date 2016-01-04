express = require 'express'
glob = require 'glob'
async = require 'async'
favicon = require 'serve-favicon'
logger = require 'morgan'
cookieParser = require 'cookie-parser'
bodyParser = require 'body-parser'
compress = require 'compression'
methodOverride = require 'method-override'
zlib = require 'zlib'

module.exports = (app, config) ->
  env = process.env.NODE_ENV || 'development'
  app.locals.ENV = env;
  app.locals.ENV_DEVELOPMENT = env == 'development'

  app.set 'views', config.root + '/app/views'
  app.set 'view engine', 'jade'
  app.set 'view options',
    pretty: env is 'development'

  # app.use(favicon(config.root + '/public/img/favicon.ico'));
  app.use logger 'dev'
  app.use bodyParser.json()
  app.use bodyParser.urlencoded(
    extended: true
  )
  app.use cookieParser()
  app.use compress
    level: zlib.Z_BEST_COMPRESSION
    memLevel: 1
  app.use express.static config.root + '/public'
  app.use methodOverride()
  controllers = glob.sync config.root + '/app/controllers/**/*.coffee'
  async.each controllers, (controller, callback) ->
    require(controller)(app)
    callback()
    return
  , (err) ->
    if err
      console.log 'A file failed to process.'
    return

  # catch 404 and forward to error handler
  app.use (req, res, next) ->
    err = new Error 'Not Found'
    err.status = 404
    res.render '404',
      message: '您访问的页面不存在'
      error: err
      title: '404'

  # error handlers

  # development error handler
  # will print stacktrace

  if app.get('env') == 'development'
    app.use (err, req, res, next) ->
      res.status err.status || 500
      res.render 'error',
        message: err.message
        error: err
        title: 'error'

  # production error handler
  # no stacktraces leaked to user
  app.use (err, req, res, next) ->
    res.status err.status || 500
    res.render 'error',
      message: err.message
      error: {}
      title: 'error'
