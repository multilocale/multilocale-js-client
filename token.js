/* Copyright 2013 - 2024 Waiterio LLC */

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
