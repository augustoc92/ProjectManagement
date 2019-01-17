import { reject } from 'ramda'
import {
  GET_PROJECTS_FULFILLED,
  UPDATE_PROJECT_FULLFILED,
  UPDATE_PROJECT_REJETED,
  ADD_PROJECT_FULLFILED,
  REMOVE_PROJECT_FULFILLED,
} from './const'
import {
  putProject
  } from '../../../helpers/api/projects'
import { projectsRef } from '../../../config/firebase'

export const getProjects = () => async dispatch => {
  projectsRef.on("value", snapshot => {
    dispatch({
      type: GET_PROJECTS_FULFILLED,
      payload: snapshot.val()
    })
  })
}

export const addItem = item => async dispatch => {
  // We could also filter the object id property
  const itemToAdd = {
    contract: item.contract,
    name: item.name
  }
  const newPostRef = projectsRef.push();
  newPostRef.set(itemToAdd);
  dispatch({
    type: ADD_PROJECT_FULLFILED,
  })
};

export const removeItem = id => async dispatch => {
  projectsRef.child(id).remove();
  dispatch({
    type: REMOVE_PROJECT_FULFILLED,
    payload: {
      id
    }
  })
};

export const updateItem = (item) => (dispatch) => {
  const { id } = item
  const formatItem = JSON.stringify(reject(a => !a && a !== Number, item))
  putProject(id, formatItem).then(() => {
    dispatch({
      type: UPDATE_PROJECT_FULLFILED,
      payload: {
        item
      }
    })
  })
    .catch((e) => {
      dispatch({
        type: UPDATE_PROJECT_REJETED,
        payload: {
          errorMsg: `Failed trying to update project ${e.error}`
        }
      })
    })
}