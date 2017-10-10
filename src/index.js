import {getAccountData} from './modules/account'
import {setErrorOutput} from './modules/fetch'
import {blinkMessage} from './modules/messages'
import {setBalanceVal, setIbanVal, setNameVal, setCurrencyVal, setDebitsAndCreditsList} from './modules/elements'
import './styles.styl'

setErrorOutput(blinkMessage)

getAccountData().then(data => {

  console.info(111)
  console.info(data)
  console.info(111)
  const account = data.account

  setBalanceVal(account.balance)
  setIbanVal(account.iban)
  setNameVal(account.name)
  setCurrencyVal(data.currency)

  setDebitsAndCreditsList(data.debitsAndCredits)

})

