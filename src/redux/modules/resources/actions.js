import { reject } from 'ramda'
import {
  GET_RESOURCES_FULFILLED,
  UPDATE_RESOURCE_FULLFILED,
  UPDATE_RESOURCE_REJETED,
  REMOVE_RESOURCE_FULFILLED,
} from './const'
import { putResource } from '../../../helpers/api/resources'
import { resourcesRef } from '../../../config/firebase'

export const getResources = () => (dispatch) => {
  resourcesRef.on("value", snapshot => {
    dispatch({
      type: GET_RESOURCES_FULFILLED,
      payload: snapshot.val()
    })
  })
}

export const addItem = item => async dispatch => {
  const noIdItem = {
    contract: item.contract,
    name: item.name,
    project: item.project
  }
  const newPostRef = resourcesRef.push();
  newPostRef.set(noIdItem);
  dispatch({
    type: GET_RESOURCES_FULFILLED,
  })
};

export const removeItem = id => async dispatch => {
  resourcesRef.child(id).remove();
  dispatch({
    type: REMOVE_RESOURCE_FULFILLED,
    payload: {
      id
    }
  })
};

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