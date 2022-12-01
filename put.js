/* Copyright 2013 - 2022 Waiterio LLC */
import http from './http.js'

export default function put(config, customFailure) {

  config.method = 'PUT'
  return http(config, customFailure)

}
