/* Copyright 2013 - 2024 Waiterio LLC */
const post = require('./post.js')

module.exports = function translateString(body) {
  return post({ url: 'translate', body }).catch(error => {
    throw new Error(`Couldn't translate string\n${error}`)
  })
}
