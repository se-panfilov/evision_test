import {addData} from './fetch'
import {ENDPOINTS} from '../config/config'

export function addBalance (obj) {
  return addData(ENDPOINTS.BALANCE, obj)
}
