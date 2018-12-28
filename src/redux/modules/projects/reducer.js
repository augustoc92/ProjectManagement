import initialState from './initialState'
import {
  GET_PROJECTS_FULFILLED,
  GET_PROJECTS_PENDING,
  GET_PROJECTS_REJECTED
} from './const'
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_PENDING: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case GET_PROJECTS_FULFILLED: {
      return {
        ...state,
        isFetching: false,
        data: action.payload.list
      }
    }
    case GET_PROJECTS_REJECTED: {
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    }
    default:
      return state

  }

}

export default reducer
