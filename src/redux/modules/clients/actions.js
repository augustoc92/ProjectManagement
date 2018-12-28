import {
  GET_CLIENTS_PENDING,
  GET_CLIENTS_FULFILLED,
  GET_CLIENTS_REJECTED
} from './const'
import { getClientsData } from '../../../helpers/api/client'


export const getClients = () => (dispatch) => {
  dispatch({
    type: GET_CLIENTS_PENDING
  })
  return getClientsData()
    .then((json) => {
      const { data } = json
      dispatch({
        type: GET_CLIENTS_FULFILLED,
        payload: {
          list: data,
        }
      })
    })
    .catch((e) => {
      dispatch({
        type: GET_CLIENTS_REJECTED,
        payload: {
          errorMsg: `Failed trying to get data ${e.error}`
        }
      })
    })
}