import {getElement, setHTML, createElem} from './dom'

const messages = {
  elemNotFound: 'No such element',
  noId: 'Id must be specified'
}

const notificationsBoxId = 'notifications-box'
const balanceId = 'account-balance'
const ibanId = 'account-iban'
const nameId = 'account-name'
const currencyId = 'account-currency'
const debitAndCreditList = 'debit-and-credit-list'

function getElem (id) {
  if (!id) throw new Error(messages.noId)
  const elem = getElement(id)
  if (!elem) throw new Error(`${messages.elemNotFound}: ${id}`)

  return elem
}

function updateElem (id, val) {
  const elem = getElem(id)
  return setHTML(elem, val)
}

export function getNotificationsBox () {
  return getElem(notificationsBoxId)
}

export function setBalanceVal (val) {
  updateElem(balanceId, val)
}

export function setIbanVal (val) {
  updateElem(ibanId, val)
}

export function setNameVal (val) {
  updateElem(nameId, val)
}
export function setCurrencyVal (val) {
  updateElem(currencyId, val)
}

export function setDebitsAndCreditsList (data) {
  if (!data) throw new Error('displayData: No data')

  const itemsHtml = data.reduce((c, v) => {
    const date = new Date(v.date)
    const str = `${v.from}, ${v.description}, ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    c += createElem('li', `${debitAndCreditList}__item`, str)
    return c
  }, '')

  updateElem(debitAndCreditList, itemsHtml)
  // setHTML(debitAndCreditList, itemsHtml)
}