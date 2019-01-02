import { reject } from 'ramda'
import {
  GET_DATA_PENDING,
  GET_DATA_FULFILLED,
  GET_DATA_REJECTED,
  UPDATE_ITEM_FULLFILED,
  UPDATE_ITEM_REJETED,
  ADD_ITEM_FULLFILED,
  ADD_ITEM_REJECTED,
  REMOVE_ITEM_FULFILLED,
  REMOVE_ITEM_REJECTED,
} from './const'
import {
  getProjectsData,
  postProject,
  delProject,
  putProject
  } from '../../../helpers/api/projects'
import {
  getClientsData,
  postClient,
  delClient,
  putClient
} from '../../../helpers/api/client'
import {
  getResourcesData,
  postResource,
  delResource,
  putResource
} from '../../../helpers/api/resources'


export const getData = (route, history) => (dispatch) => {
  dispatch({
    type: GET_DATA_PENDING
  })
  let getData
  switch (route) {
    case 'projects':
      getData = () =>  getProjectsData()
      break;
    case 'clients':
      getData = () =>  getClientsData()
      break;
    case 'resources':
      getData = () => getResourcesData()
      break;
      default:
      getData = null
  }
  if (!getData) return history.push('notfound')
  return getData()
    .then((json) => {
      const { data } = json
      dispatch({
        type: GET_DATA_FULFILLED,
        payload: {
          list: data,
        }
      })
    })
    .catch((e) => {
      dispatch({
        type: GET_DATA_REJECTED,
        payload: {
          errorMsg: `Failed trying to get data ${e.error}`
        }
      })
    })
}

export const removeItem = (id, route) => (dispatch) => {
  let delItem
  switch (route) {
    case 'projects':
    delItem = () =>  delProject(id)
      break;
    case 'clients':
    delItem = () =>  delClient(id)
      break;
    case 'resources':
      delItem = () => delResource(id)
      break;
    default:
    dispatch({
      type: REMOVE_ITEM_FULFILLED,
      payload: {
        id
      }
    })
  }
  delItem(id)
    .then(() => {
      dispatch({
        type: REMOVE_ITEM_FULFILLED,
        payload: {
          id
        }
      })
    })
    .catch((errMsg) => {
      dispatch({
        type: REMOVE_ITEM_REJECTED,
        payload: {
          errorMsg: errMsg
        }
      })
    })
}
export const addItem = (item, route) => (dispatch) => {
  const formatItem = reject(a => !a && a !== Number, item)
  let postItem
  switch (route) {
    case 'projects':
      postItem = () => postProject(formatItem)
      break
    case 'clients':
      postItem = () => postClient(formatItem)
      break
    case 'resources':
      postItem = () => postResource(formatItem)
      break
    default:
      dispatch({
        type: ADD_ITEM_FULLFILED,
        payload: {
          newItem: item
        }
      })
  }
  postItem().then(() => {
      dispatch({
        type: ADD_ITEM_FULLFILED,
        payload: {
          newItem: item
        }
      })
    })
    .catch((errMsg) => {
      dispatch({
        type: ADD_ITEM_REJECTED,
        payload: {
          errorMsg: errMsg
        }
      })
    })
}

export const updateItem = (item, route) => (dispatch) => {
  let putItem
  const { id } = item
  const formatItem = JSON.stringify(reject(a => !a && a !== Number, item))
  switch (route) {
    case 'projects':
    putItem = () =>  putProject(id, formatItem)
      break;
    case 'clients':
    putItem = () =>  putClient(id, formatItem)
      break;
    case 'resources':
    putItem = () => putResource(id, formatItem)
      break;
    default:
      break;
  }
  putItem(id, formatItem).then(() => {
    dispatch({
      type: UPDATE_ITEM_FULLFILED,
      payload: {
        item
      }
    })
  })
    .catch((e) => {
      dispatch({
        type: UPDATE_ITEM_REJETED,
        payload: {
          errorMsg: `Failed trying to update project ${e.error}`
        }
      })
    })
}