/* Copyright 2013 - 2022 Waiterio LLC */
import { btoa } from 'b64-lite'
import fetch from 'isomorphic-fetch'
import failure from './failure.js'
import getMultilocaleUrl from './getMultilocaleUrl.js'
import httpWithoutHeaders from './httpWithoutHeaders.js'
import refreshAccessToken from './refreshAccessToken.js'

export default async function http(config, customFailure) {
  let accessToken = await refreshAccessToken()

  if (!config.headers) {
    config.headers = {}
  }

  config.headers.Accept = config.headers.Accept || 'application/json'
  config.headers['Content-Type'] =
    config.headers['Content-Type'] || 'application/json'
  config.headers.Authorization =
    config.headers.Authorization || 'Token ' + btoa(accessToken || '')

  const url = getMultilocaleUrl() + '/api/' + config.url

  // console.log(`http ${config.method} ${url}`)

  return fetch(url, {
    method: config.method,
    headers: config.headers,
    body: JSON.stringify(config.body),
  })
    .then(response => {
      if (!response.ok) {
        if (response.url.startsWith('https://s3.amazonaws.com')) {
          return httpWithoutHeaders(response.url)
        } else {
          return response.json().then((error = {}) => {
            if (!error.status) {
              error.status = response.status
            }

            if (!error.message) {
              error.message = response.statusText
            }

            throw error
          })
        }
      } else {
        return response.json()
      }
    })
    .catch(error => {
      if (config.retries > 0) {
        const retried = config.retried || 0
        console.info(
          `retrying http ${
            config.method
          } ${url} after error ${error.toString()} (${
            config.retries
          } retries left)`,
        )
        let wait = 4 ** retried * 1000
        return new Promise(resolve => setTimeout(resolve, wait)).then(() =>
          http(
            {
              ...config,
              retries: config.retries - 1,
              retried: retried + 1,
            },
            customFailure,
          ),
        )
      }

      if (customFailure) {
        return customFailure(error)
      } else {
        return failure(error)
      }
    })
}
