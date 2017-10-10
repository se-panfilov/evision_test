import {getData} from './fetch'
import {ENDPOINTS} from '../config/config'

export async function getAccountData () {
  return await getData(ENDPOINTS.BALANCE)
}
