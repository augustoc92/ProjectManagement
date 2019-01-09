import { reject } from 'ramda'
import {
  GET_CLIENTS_FULFILLED,
  REMOVE_CLIENT_FULFILLED,
  ADD_CLIENT_FULLFILED,
  UPDATE_CLIENT_FULLFILED,
  UPDATE_CLIENT_REJETED
} from './const'
import { putClient } from '../../../helpers/api/client'
import { clientsRef } from '../../../config/firebase'

export const getClients = () => async dispatch => {
  clientsRef.on("value", snapshot => {
    dispatch({
      type: GET_CLIENTS_FULFILLED,
      payload: snapshot.val()
    })
  })
}

export const addItem = item => async dispatch => {
  var newPostRef = clientsRef.push();
  newPostRef.set(item);
  dispatch({
    type: ADD_CLIENT_FULLFILED,
    payload: {
      newItem: item
    }
  })
};

export const removeItem = id => async dispatch => {
  clientsRef.child(id).remove();
  dispatch({
    type: REMOVE_CLIENT_FULFILLED,
    payload: {
      id
    }
  })
};

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