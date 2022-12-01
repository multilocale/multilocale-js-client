/* Copyright 2013 - 2022 Waiterio LLC */
import http from './http.js'

export default function post(config, customFailure) {

  config.method = 'POST'
  return http(config, customFailure)

}
