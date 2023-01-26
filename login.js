/* Copyright 2013 - 2022 Waiterio LLC */
const { btoa } = require('b64-lite')
const post = require('./post.js')

module.exports = function login(email, password) {

  const headers = {
    Authorization: `Basic ${btoa(email + ':' + password)}`,
  }

  return post({url: 'login', headers})

}
