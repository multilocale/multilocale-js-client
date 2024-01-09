/* Copyright 2013 - 2024 Waiterio LLC */
/* eslint no-bitwise: 0 */

module.exports = function uuid() {
  return 'xxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, c => {
    let r = (Math.random() * 16) | 0
    let v = c === 'x' ? r : (r & 3) | 8
    return v.toString(16)
  })
}
