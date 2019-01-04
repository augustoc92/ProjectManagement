import { reject } from 'ramda'
import {
  GET_PROJECTS_PENDING,
  GET_PROJECTS_FULFILLED,
  GET_PROJECTS_REJECTED,
  UPDATE_PROJECT_FULLFILED,
  UPDATE_PROJECT_REJETED,
  ADD_PROJECT_FULLFILED,
  ADD_PROJECT_REJECTED,
  REMOVE_PROJECT_FULFILLED,
  REMOVE_PROJECT_REJECTED,
} from './const'
import {
  getProjectsData,
  postProject,
  delProject,
  putProject
  } from '../../../helpers/api/projects'

export const getProjects = () => (dispatch) => {
  dispatch({
    type: GET_PROJECTS_PENDING
  })
  return getProjectsData()
    .then((json) => {
      const { data } = json
      dispatch({
        type: GET_PROJECTS_FULFILLED,
        payload: {
          list: data,
        }
      })
    })
    .catch((e) => {
      dispatch({
        type: GET_PROJECTS_REJECTED,
        payload: {
          errorMsg: `Failed trying to get data ${e.error}`
        }
      })
    })
}

export const removeItem = (id) => (dispatch) => {
  delProject(id)
    .then(() => {
      dispatch({
        type: REMOVE_PROJECT_FULFILLED,
        payload: {
          id
        }
      })
    })
    .catch((errMsg) => {
      dispatch({
        type: REMOVE_PROJECT_REJECTED,
        payload: {
          errorMsg: errMsg
        }
      })
    })
}

export const addItem = (item) => (dispatch) => {
  const formatItem = reject(a => !a && a !== Number, item)
  postProject(formatItem)
    .then(() => {
      dispatch({
        type: ADD_PROJECT_FULLFILED,
        payload: {
          newItem: item
        }
      })
    })
    .catch((errMsg) => {
      dispatch({
        type: ADD_PROJECT_REJECTED,
        payload: {
          errorMsg: errMsg
        }
      })
    })
}

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