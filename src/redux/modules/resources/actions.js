import { reject } from 'ramda'
import {
  GET_RESOURCES_PENDING,
  GET_RESOURCES_FULFILLED,
  GET_RESOURCES_REJECTED,
  UPDATE_RESOURCE_FULLFILED,
  UPDATE_RESOURCE_REJETED,
  ADD_RESOURCE_FULLFILED,
  ADD_RESOURCE_REJECTED,
  REMOVE_RESOURCE_FULFILLED,
  REMOVE_RESOURCE_REJECTED,
} from './const'
import { getResourcesData, delResource, postResource, putResource } from '../../../helpers/api/resources'


export const getResources = () => (dispatch) => {
  dispatch({
    type: GET_RESOURCES_PENDING
  })
  return getResourcesData()
    .then((json) => {
      const { data } = json
      dispatch({
        type: GET_RESOURCES_FULFILLED,
        payload: {
          list: data,
        }
      })
    })
    .catch((e) => {
      dispatch({
        type: GET_RESOURCES_REJECTED,
        payload: {
          errorMsg: `Failed trying to get data ${e.error}`
        }
      })
    })
}

export const removeItem = (id) => (dispatch) => {
  delResource(id)
    .then(() => {
      dispatch({
        type: REMOVE_RESOURCE_FULFILLED,
        payload: {
          id
        }
      })
    })
    .catch((errMsg) => {
      dispatch({
        type: REMOVE_RESOURCE_REJECTED,
        payload: {
          errorMsg: errMsg
        }
      })
    })
}
export const addItem = (item) => (dispatch) => {
  const formatItem = reject(a => !a && a !== Number, item)
  postResource(formatItem)
    .then(() => {
      dispatch({
        type: ADD_RESOURCE_FULLFILED,
        payload: {
          newItem: item
        }
      })
    })
    .catch((errMsg) => {
      dispatch({
        type: ADD_RESOURCE_REJECTED,
        payload: {
          errorMsg: errMsg
        }
      })
    })
}

export const updateItem = (item) => (dispatch) => {
  const { id } = item
  const formatItem = JSON.stringify(reject(a => !a && a !== Number, item))
  putResource(id, formatItem).then(() => {
    dispatch({
      type: UPDATE_RESOURCE_FULLFILED,
      payload: {
        item
      }
    })
  })
    .catch((e) => {
      dispatch({
        type: UPDATE_RESOURCE_REJETED,
        payload: {
          errorMsg: `Failed trying to update project ${e.error}`
        }
      })
    })
}