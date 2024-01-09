/* Copyright 2013 - 2024 Waiterio LLC */
const post = require('./post.js')

module.exports = function addProject(body) {
  return post({ url: 'projects', body }).catch(error => {
    throw new Error(`Couldn't add project\n${error}`)
  })
}
