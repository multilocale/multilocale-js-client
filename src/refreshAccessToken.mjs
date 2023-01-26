/* Copyright 2013 - 2022 Waiterio LLC */
import { btoa } from 'b64-lite'
import fetch from 'isomorphic-fetch'
import {
  getAccessToken,
  isAccessTokenExpired,
  setAccessToken,
} from './accessToken.mjs'
import getMultilocaleUrl from './getMultilocaleUrl.mjs'
import {
  getRefreshToken,
  isRefreshTokenExpired,
  setRefreshToken,
} from './refreshToken.mjs'

export default async function refreshAccessToken() {
  let accessToken = getAccessToken()

  if (accessToken && isAccessTokenExpired()) {
    if (isRefreshTokenExpired()) {
      if (typeof window !== 'undefined') {
        window.open('/logout')
      }

      throw new Error('refresh token has expired')
    } else {
      let refreshToken = getRefreshToken()

      const url = getMultilocaleUrl() + '/api/refresh-access-token'

      let result = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: 'Token ' + btoa(refreshToken),
        },
      })
        .then(response => {
          if (!response.ok) {
            return response.json().then(error => {
              throw error
            })
          } else {
            return response.json()
          }
        })
        .catch(console.log)

      accessToken = result.accessToken
      refreshToken = result.refreshToken

      setAccessToken(accessToken)
      setRefreshToken(refreshToken)
    }
  }

  return accessToken
}
