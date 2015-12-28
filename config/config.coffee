path     = require 'path'
rootPath = path.normalize __dirname + '/..'
env      = process.env.NODE_ENV || 'development'

config =
  development:
    root: rootPath
    app:
      name: 'holaever-com'
    port: 9022
    db: 'mongodb://localhost/holaever-com-development'

  test:
    root: rootPath
    app:
      name: 'holaever-com'
    port: 9022
    db: 'mongodb://localhost/holaever-com-test'

  production:
    root: rootPath
    app:
      name: 'holaever-com'
    port: 9022
    db: 'mongodb://localhost:27017/'

module.exports = config[env]
