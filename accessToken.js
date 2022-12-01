/* Copyright 2013 - 2022 Waiterio LLC */
import { atob } from 'b64-lite'

let accessToken = null
let callback = null

export function getAccessTokenPayload() {
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

export function isAccessTokenExpired() {
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

export function getAccessToken() {
  return accessToken
}

export function setAccessToken(accessToken_) {
  const newAccessToken = accessToken_

  if (accessToken !== newAccessToken) {
    accessToken = newAccessToken

    if (callback) {
      callback(newAccessToken)
    }
  }
}

export function setAccessTokenCallback(callback_) {
  callback = callback_
}

export const setAccessTokenForMultilocaleClient = setAccessToken
export const setAccessTokenCallbackForMultilocaleClient = setAccessTokenCallback
