import {addData} from './fetch'
import {ENDPOINTS} from '../config/config'

export function setBalance (val) {
  return addData(ENDPOINTS.BALANCE, val)
}
