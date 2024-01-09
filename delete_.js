/* Copyright 2013 - 2024 Waiterio LLC */
const http = require('./http.js')
const failureIgnoreNotFoundOrNotModified = require('./failureIgnoreNotFoundOrNotModified.js')

module.exports = function (config, customFailure) {
  config.method = 'DELETE'

  if (!customFailure) {
    customFailure = failureIgnoreNotFoundOrNotModified
  }

  return http(config, customFailure)
}
