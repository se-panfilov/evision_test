import {setHTML, createElem, clearHTML} from './dom'
import {getNotificationsBox} from './elements'

const container = getNotificationsBox()

export function showMessage (message, typeClass = '-error', elemType = 'div') {
  const msgHtml = createElem(elemType, `messages__notification-item ${typeClass}`, message)
  setHTML(container, msgHtml)
}

export function clearMessage () {
  clearHTML(container)
}

export function blinkMessage (message, typeClass, timeout = 3000) {
  showMessage(message, typeClass)

  return setTimeout(() => {
    clearMessage()
  }, timeout)
}