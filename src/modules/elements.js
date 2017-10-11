import {getElement, setHTML, createElem, addEventListener} from './dom'

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
const changeBalanceFormId = 'change-balance-form'
const newBalanceAmountId = 'new-balance-amount'
const newBalanceFromOrToId = 'new-balance-from-or-to'
const newBalanceDescriptionId = 'new-balance-description'
const newBalanceRecordTypeDebitId = 'new-balance-record-type-debit'

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

function createTD (val) {
  const nodeType = 'td'
  const cellClass = '__cell'

  return createElem(nodeType, `${debitAndCreditList}${cellClass}`, val || '-')
}

export function setDebitsAndCreditsList (data) {
  if (!data) throw new Error('displayData: No data')

  const itemsHtml = data.reduce((c, v) => {
    const date = new Date(v.date)
    let day = date.getDate()
    if (day.toString().length === 1) day = '0' + day
    let month = date.getMonth() + 1
    if (month.toString().length === 1) month = '0' + month

    c += `<tr class="${debitAndCreditList}__item">`
    c += createTD(v.from)
    c += createTD(v.to)
    c += createTD(v.amount)
    c += createTD(v.description)
    c += createTD(`${day}-${month}-${date.getFullYear()}`)
    c += '</tr>'

    return c
  }, '')

  updateElem(debitAndCreditList, itemsHtml)
}

export function setBalanceFormAction (fn, event = 'submit') {
  const elem = getElem(changeBalanceFormId)

  addEventListener(elem, event, fn)
}

export function getBalanceFormData () {
  const newBalanceAmountElem = getElem(newBalanceAmountId)
  const newBalanceFromOrToIdElem = getElem(newBalanceFromOrToId)
  const newBalanceDescriptionIdElem = getElem(newBalanceDescriptionId)
  const newBalanceRecordTypeDebitElem = getElem(newBalanceRecordTypeDebitId)

  const field = (newBalanceRecordTypeDebitElem.checked) ? 'from' : 'to'

  const result = {
    amount: +newBalanceAmountElem.value,
    description: newBalanceDescriptionIdElem.value,
    from: '',
    to: ''
  }

  result[field] = newBalanceFromOrToIdElem.value

  return result
}