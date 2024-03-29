/* Copyright 2013 - 2024 Waiterio LLC */
const checkStringNotEmpty = require('@multilocale/check/checkStringNotEmpty.js')
const delete_ = require('./delete_.js')

module.exports = function deletePhrasesByKey(key) {
  checkStringNotEmpty(key)

  let url = `phrases?key=${key}`

  return delete_({ url }).catch(error => {
    throw new Error(`Couldn't delete phrases\n${error}`)
  })
}
