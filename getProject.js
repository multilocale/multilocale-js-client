/* Copyright 2013 - 2024 Waiterio LLC */
const get = require('./get.js')

module.exports = function getProject(projectId) {
  let url = 'projects/' + projectId
  // console.log('url', url)
  return get({ url }).catch(error => {
    throw new Error(`Couldn't get project \n${error}`)
  })
}
