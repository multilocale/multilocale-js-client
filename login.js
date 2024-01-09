/* Copyright 2013 - 2024 Waiterio LLC */
const post = require('./post.js')

module.exports = function login(email, password) {
  const headers = {
    Authorization: `Basic ${btoa(email + ':' + password)}`,
  }

  return post({ url: 'login', headers })
}
