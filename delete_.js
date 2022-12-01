/* Copyright 2013 - 2022 Waiterio LLC */
import http from './http.js'
import failureIgnoreNotFoundOrNotModified from './failureIgnoreNotFoundOrNotModified.js'

export default function (config, customFailure) {

  config.method = 'DELETE'

  if (!customFailure) {
    customFailure = failureIgnoreNotFoundOrNotModified
  }

  return http(config, customFailure)

}
