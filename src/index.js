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

function applyDataToDOM (data) {
  const account = data.account

  setBalanceVal(account.balance)
  setIbanVal(account.iban)
  setNameVal(account.name)
  setCurrencyVal(data.currency)

  setDebitsAndCreditsList(data.debitsAndCredits)
}

getAccountData().then(applyDataToDOM)

setBalanceFormAction(e => {
  e.preventDefault()
  const val = getBalanceFormData()
  val.date = new Date()
  addBalance(val).then(() => getAccountData().then(applyDataToDOM))
})