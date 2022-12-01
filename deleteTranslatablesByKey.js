/* Copyright 2013 - 2022 Waiterio LLC */
import checkStringNotEmpty from '@multilocale/check/checkStringNotEmpty.js'
import delete_ from './delete_.js'

export default function deleteTranslatablesByKey(key) {
  checkStringNotEmpty(key)

  let url = `translatables?key=${key}`

  return delete_({ url }).catch(error => {
    throw new Error(`Couldn't delete translatables\n${error}`)
  })
}
