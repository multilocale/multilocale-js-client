/* Copyright 2013 - 2022 Waiterio LLC */
const http = require('./http.js')

module.exports = function post(config, customFailure) {

  config.method = 'POST'
  return http(config, customFailure)

}
