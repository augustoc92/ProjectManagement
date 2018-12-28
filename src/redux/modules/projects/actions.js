import {
  GET_PROJECTS_PENDING,
  GET_PROJECTS_FULFILLED,
  GET_PROJECTS_REJECTED
} from './const'
import { getProjectsData } from '../../../helpers/api/projects'


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