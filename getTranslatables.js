/* Copyright 2013 - 2022 Waiterio LLC */
import get from './get.js'

export default function getTranslatables(parameters) {
  let url = 'translatables'

  url += '?' + new URLSearchParams(parameters).toString()

  return get({ url, retries: 3 }).catch(error => {
    throw new Error(`Couldn't get translatables \n${error}`)
  })
}
