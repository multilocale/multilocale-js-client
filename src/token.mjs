/* Copyright 2013 - 2022 Waiterio LLC */
import { btoa } from 'b64-lite'

let token = null

export function getToken() {
  return token
}

export function setToken(token_) {
  token = btoa(token_)
}

export const setTokenForMultilocaleClient = setToken
