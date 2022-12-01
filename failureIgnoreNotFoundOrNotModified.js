/* Copyright 2013 - 2022 Waiterio LLC */
import failure from './failure.js'

export default function failureIgnoreNotFoundOrNotModified(error) {

  if (error && error.status !== 404 && error.status !== 304) {
    return failure(error)
  }

  return error

}
