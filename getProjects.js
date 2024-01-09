/* Copyright 2013 - 2024 Waiterio LLC */
const get = require('./get.js')

module.exports = function getProjects() {
  let url = 'projects'

  return get({ url }).catch(error => {
    throw new Error(`Couldn't get projects \n${error}`)
  })
}
