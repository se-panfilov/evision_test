import {getBalance} from './modules/balance'
import {setErrorOutput} from './modules/fetch'
import {blinkMessage} from './modules/messages'
import './styles.styl'

setErrorOutput(blinkMessage)

getBalance().then(v => {
  console.info(111)
  console.info(v)
  console.info(111)
})

