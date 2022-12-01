/* Copyright 2013 - 2022 Waiterio LLC */
import fetch from 'isomorphic-fetch'
import failure from './failure.js'

export default function httpWithoutHeaders(url, customFailure) {

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
