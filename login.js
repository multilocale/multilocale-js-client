/* Copyright 2013 - 2022 Waiterio LLC */
import { btoa } from 'b64-lite'
import post from './post.js'

export default function login(email, password) {

  const headers = {
    Authorization: `Basic ${btoa(email + ':' + password)}`,
  }

  return post({url: 'login', headers})

}
