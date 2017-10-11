import {addData} from './fetch'
import {ENDPOINTS} from '../config/config'

export function addBalance (val) {
  return addData(ENDPOINTS.BALANCE, val)
}
