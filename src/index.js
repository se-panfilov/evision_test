import {getAccountData} from './modules/account'
import {setErrorOutput} from './modules/fetch'
import {blinkMessage} from './modules/messages'
import {setBalanceVal, setIbanVal, setNameVal} from './modules/elements'
import './styles.styl'

setErrorOutput(blinkMessage)

getAccountData().then(data => {

  console.info(111)
  console.info(data)
  console.info(111)

  setBalanceVal(data.account.balance)
  setIbanVal(data.account.iban)
  setNameVal(data.account.name)

})

