/* Copyright 2013 - 2022 Waiterio LLC */
const post = require('./post.js')

module.exports = function addTranslatables(translatables) {

  return post({url: 'translatables', body: translatables}).catch(error => {

    throw new Error(`Couldn't add translatables\n${error}`)

  })

}
