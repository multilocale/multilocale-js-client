/* Copyright 2013 - 2024 Waiterio LLC */
const http = require('./http.js')

module.exports = function get(config, customFailure) {
  config.method = 'GET'
  return http(config, customFailure)
}
