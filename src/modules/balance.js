import {getData} from './fetch'
import {ENDPOINTS} from '../config/config'

export async function getBalance () {
  return await getData(ENDPOINTS.balance)
}
