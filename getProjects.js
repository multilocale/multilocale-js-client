/* Copyright 2013 - 2022 Waiterio LLC */
import get from './get.js'

export default function getProjects() {

  let url = 'projects'

  return get({url}).catch(error => {

    throw new Error(`Couldn't get projects \n${error}`)

  })

}
