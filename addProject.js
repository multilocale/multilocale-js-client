/* Copyright 2013 - 2022 Waiterio LLC */
import post from './post.js'

export default function addProject(body) {

  return post({url: 'projects', body}).catch(error => {

    throw new Error(`Couldn't add project\n${error}`)

  })

}
