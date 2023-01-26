/* Copyright 2013 - 2022 Waiterio LLC */
import post from './post.mjs'

export default function addTranslatables(translatables) {

  return post({url: 'translatables', body: translatables}).catch(error => {

    throw new Error(`Couldn't add translatables\n${error}`)

  })

}
