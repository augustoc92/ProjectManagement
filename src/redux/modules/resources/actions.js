import {
  GET_RESOURCES_PENDING,
  GET_RESOURCES_FULFILLED,
  GET_RESOURCES_REJECTED
} from './const'
import { getResourcesData } from '../../../helpers/api/resources'


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