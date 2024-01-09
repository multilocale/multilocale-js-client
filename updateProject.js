/* Copyright 2013 - 2024 Waiterio LLC */
const put = require('./put.js')

module.exports = function updateProject(project) {
  return put({ url: `projects/${project._id}`, body: project }).catch(error => {
    throw new Error(`Couldn't update project\n${error}`)
  })
}
