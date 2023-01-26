/* Copyright 2013 - 2022 Waiterio LLC */
const { atob } = require('b64-lite')

let refreshToken = null

function isRefreshTokenExpired() {
  let isExpired = true

  try {
    if (refreshToken) {
      let payload = JSON.parse(atob(refreshToken.split('.')[1]))
      const now = Math.floor(Date.now() / 1000)

      if (payload.exp > now) {
        isExpired = false
      }
    }
  } catch (error) {
    console.error(error)
  }

  return isExpired
}

function getRefreshToken() {
  return refreshToken
}

function setRefreshToken(refreshToken_) {
  refreshToken = refreshToken_
}

const setRefreshTokenForMultilocaleClient = setRefreshToken

module.exports = {
  isRefreshTokenExpired,
  getRefreshToken,
  setRefreshToken,
  setRefreshTokenForMultilocaleClient,
}