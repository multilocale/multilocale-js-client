/* Copyright 2013 - 2022 Waiterio LLC */
/* eslint no-bitwise: 0 */

export default function uuid() {
  return 'xxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, c => {
    let r = (Math.random() * 16) | 0
    let v = c === 'x' ? r : (r & 3) | 8
    return v.toString(16)
  })
}
