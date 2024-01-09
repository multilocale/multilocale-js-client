/* Copyright 2013 - 2024 Waiterio LLC */
const http = require('./http.js')

module.exports = function put(config, customFailure) {
  config.method = 'PUT'
  return http(config, customFailure)
}
