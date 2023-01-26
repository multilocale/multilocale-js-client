/* Copyright 2013 - 2022 Waiterio LLC */
import http from './http.mjs'

export default function get(config, customFailure) {

  config.method = 'GET'
  return http(config, customFailure)

}
