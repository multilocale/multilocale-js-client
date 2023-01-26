/* Copyright 2013 - 2022 Waiterio LLC */
const checkStringNotEmpty = require('@multilocale/check/checkStringNotEmpty.js')
const delete_ = require('./delete_.js')

module.exports = function deleteTranslatablesByKey(key) {
  checkStringNotEmpty(key)

  let url = `translatables?key=${key}`

  return delete_({ url }).catch(error => {
    throw new Error(`Couldn't delete translatables\n${error}`)
  })
}
