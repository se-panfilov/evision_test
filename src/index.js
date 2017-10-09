import {getBalance} from './modules/balance'
import {setErrorOutput} from './modules/fetch'
import {blinkMessage} from './modules/messages'
import './styles.styl'

setErrorOutput(blinkMessage)

const balance = getBalance()

console.info(balance)

