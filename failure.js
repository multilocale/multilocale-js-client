/* Copyright 2013 - 2024 Waiterio LLC */
const ClientError = require('./ClientError.js')

module.exports = function failure(response) {
  throw new ClientError(response)
}
