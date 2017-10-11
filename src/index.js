import {getAccountData} from './modules/account'
import {setErrorOutput} from './modules/fetch'
import {blinkMessage} from './modules/messages'
import {addBalance} from './modules/balance'
import {
  setBalanceVal,
  setIbanVal,
  setNameVal,
  setCurrencyVal,
  setDebitsAndCreditsList,
  setBalanceFormAction,
  getBalanceFormData
} from './modules/elements'
import './styles.styl'

setErrorOutput(blinkMessage)

getAccountData().then(data => {
  const account = data.account

  setBalanceVal(account.balance)
  setIbanVal(account.iban)
  setNameVal(account.name)
  setCurrencyVal(data.currency)

  setDebitsAndCreditsList(data.debitsAndCredits)
})

setBalanceFormAction(e => {
  e.preventDefault()
  const val = getBalanceFormData()
  console.info('qqqqqqq')
  console.info(val)
  console.info('qqqqqqq')
  addBalance(val)
})