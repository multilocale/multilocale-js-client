/* Copyright 2013 - 2022 Waiterio LLC */
const { btoa } = require('b64-lite')

let token = null

function getToken() {
  return token
}

function setToken(token_) {
  token = btoa(token_)
}

const setTokenForMultilocaleClient = setToken

module.exports = {
  getToken,
  setToken,
  setTokenForMultilocaleClient,
}
