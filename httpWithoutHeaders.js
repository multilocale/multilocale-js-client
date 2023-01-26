/* Copyright 2013 - 2022 Waiterio LLC */
const fetch = require('isomorphic-fetch')
const failure = require('./failure.js')

module.exports = function httpWithoutHeaders(url, customFailure) {

  return fetch(url).then(response => {

    if (!response.ok) {

      return response.json().then(error => {

        throw error

      })

    } else {

      return response.json()

    }

  }).catch(customFailure || failure)

}
