/* Copyright 2013 - 2024 Waiterio LLC */
const get = require('./get.js')

module.exports = function getPhrases(parameters) {
  let url = 'phrases'

  url += '?' + new URLSearchParams(parameters).toString()

  // console.log('url', url)

  return get({ url, retries: 3 }).catch(error => {
    throw new Error(`Couldn't get phrases \n${error}`)
  })
}
