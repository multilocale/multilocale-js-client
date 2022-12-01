/* Copyright 2013 - 2022 Waiterio LLC */
import ClientError from './ClientError.js'

export default function failure(response) {

  throw new ClientError(response)

}
