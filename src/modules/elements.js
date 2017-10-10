import {getElement, setHTML} from './dom'

const messages = {
  elemNotFound: 'No such element',
  noId: 'Id must be specified'
}

const notificationsBoxId = 'notifications-box'
const balanceId = 'account-balance'
const ibanId = 'account-iban'
const nameId = 'account-name'

function getElem (id) {
  if (!id) throw new Error(messages.noId)
  const elem = getElement(id)
  if (!elem) throw new Error(`${messages.elemNotFound}: ${id}`)

  return elem
}

export function getNotificationsBox () {
  return getElem(notificationsBoxId)
}

export function setBalanceVal (val) {
  const elem = getElem(balanceId)
  return setHTML(elem, val)
}

export function setIbanVal (val) {
  const elem = getElem(ibanId)
  return setHTML(elem, val)
}

export function setNameVal (val) {
  const elem = getElem(nameId)
  return setHTML(elem, val)
}