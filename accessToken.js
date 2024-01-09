/* Copyright 2013 - 2024 Waiterio LLC */

let accessToken = null
let callback = null

function getAccessTokenPayload() {
  let payload

  if (accessToken) {
    try {
      payload = JSON.parse(atob(accessToken.split('.')[1]))
    } catch (error) {
      console.error(error)
    }
  }

  return payload
}

function isAccessTokenExpired() {
  let isExpired = true

  try {
    let payload = getAccessTokenPayload()

    const now = Math.floor(Date.now() / 1000)

    if (payload.exp > now) {
      isExpired = false
    }
  } catch (error) {
    console.error(error)
  }

  return isExpired
}

function getAccessToken() {
  return accessToken
}

function setAccessToken(accessToken_) {
  const newAccessToken = accessToken_

  if (accessToken !== newAccessToken) {
    accessToken = newAccessToken

    if (callback) {
      callback(newAccessToken)
    }
  }
}

function setAccessTokenCallback(callback_) {
  callback = callback_
}

const setAccessTokenForMultilocaleClient = setAccessToken
const setAccessTokenCallbackForMultilocaleClient = setAccessTokenCallback

module.exports = {
  getAccessTokenPayload,
  isAccessTokenExpired,
  getAccessToken,
  setAccessToken,
  setAccessTokenCallback,
  setAccessTokenForMultilocaleClient,
  setAccessTokenCallbackForMultilocaleClient,
}
