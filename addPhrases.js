/* Copyright 2013 - 2022 Waiterio LLC */
const post = require('./post.js')

module.exports = function addPhrases(phrases) {
  return post({ url: 'phrases', body: phrases }).catch(error => {
    throw new Error(`Couldn't add phrases\n${error}`)
  })
}
