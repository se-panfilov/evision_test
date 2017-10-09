import {getElement} from './modules/dom'

const messages = {
  elemNotFound: 'No such element',
  noId: 'Id must be specified'
}

const notificationsBoxId = ''

function getElem (id) {
  if (!id) throw new Error(messages.noId)
  const elem = getElement(id)
  if (!elem) throw new Error(`${messages.elemNotFound}: ${id}`)

  return elem
}

export function getNotificationsBox () {
  return getElem(notificationsBoxId)
}