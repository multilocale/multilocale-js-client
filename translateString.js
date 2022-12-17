/* Copyright 2013 - 2022 Waiterio LLC */
import post from './post.js'

export default function translateString(body) {
  return post({ url: 'translate', body }).catch(error => {
    throw new Error(`Couldn't translate string\n${error}`)
  })
}
