import {URL} from '../config/config'
import {ERRORS} from '../config/constants'

let showErrorCustomFn = undefined

function showError (message) {
  return (showErrorCustomFn) ? showErrorCustomFn(message) : console.error(message)
}

function onError (response) {
  switch (response.status) {
    case ERRORS.badRequest:
      return showError('Bad request')
    case ERRORS.notFound:
      return showError('Not found')
    case ERRORS.methodNotAllowed:
      return showError('Method not allowed')
    case ERRORS.internalServerError:
      return showError('Internal server error')
    case ERRORS.serviceUnavailable:
      return showError('Service unavailable')
    default:
      return showError('Unknown error')
  }
}

export async function getData (entityStr) {
  return await fetch(`${URL}/${entityStr}`).then(response => {
    if (!response.ok) return onError(response)

    return response.json()
  })
}

export function addData (url) {
  return fetch(`${URL}/${entityStr}/add`).then(response => {
    if (!response.ok) return onError(response)

    return response.json()
  })
}

export function setErrorOutput (fn) {
  showErrorCustomFn = fn
}