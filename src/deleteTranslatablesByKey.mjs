/* Copyright 2013 - 2022 Waiterio LLC */
import checkStringNotEmpty from '@multilocale/check/checkStringNotEmpty.mjs'
import delete_ from './delete_.mjs'

export default function deleteTranslatablesByKey(key) {
  checkStringNotEmpty(key)

  let url = `translatables?key=${key}`

  return delete_({ url }).catch(error => {
    throw new Error(`Couldn't delete translatables\n${error}`)
  })
}
