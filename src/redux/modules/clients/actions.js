import { reject } from 'ramda'
import {
  GET_CLIENTS_PENDING,
  GET_CLIENTS_FULFILLED,
  GET_CLIENTS_REJECTED,
  REMOVE_CLIENT_FULFILLED,
  REMOVE_CLIENT_REJECTED,
  ADD_CLIENT_FULLFILED,
  ADD_CLIENT_REJECTED,
  UPDATE_CLIENT_FULLFILED,
  UPDATE_CLIENT_REJETED
} from './const'
import { getClientsData, delClient, putClient, postClient } from '../../../helpers/api/client'


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


export const removeItem = (id) => (dispatch) => {
  delClient(id)
    .then(() => {
      dispatch({
        type: REMOVE_CLIENT_FULFILLED,
        payload: {
          id
        }
      })
    })
    .catch((errMsg) => {
      dispatch({
        type: REMOVE_CLIENT_REJECTED,
        payload: {
          errorMsg: errMsg
        }
      })
    })
}
export const addItem = (item) => (dispatch) => {
  const formatItem = reject(a => !a && a !== Number, item)
  postClient(formatItem)
    .then(() => {
      dispatch({
        type: ADD_CLIENT_FULLFILED,
        payload: {
          newItem: item
        }
      })
    })
    .catch((errMsg) => {
      dispatch({
        type: ADD_CLIENT_REJECTED,
        payload: {
          errorMsg: errMsg
        }
      })
    })
}

export const updateItem = (item) => (dispatch) => {
  const { id } = item
  const formatItem = JSON.stringify(reject(a => !a && a !== Number, item))
  putClient(id, formatItem).then(() => {
    dispatch({
      type: UPDATE_CLIENT_FULLFILED,
      payload: {
        item
      }
    })
  })
    .catch((e) => {
      dispatch({
        type: UPDATE_CLIENT_REJETED,
        payload: {
          errorMsg: `Failed trying to update a client ${e.error}`
        }
      })
    })
}