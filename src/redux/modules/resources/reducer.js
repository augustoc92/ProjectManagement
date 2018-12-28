import initialState from './initialState'
import {
  GET_RESOURCES_FULFILLED,
  GET_RESOURCES_PENDING,
  GET_RESOURCES_REJECTED
} from './const'
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESOURCES_PENDING: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case GET_RESOURCES_FULFILLED: {
      return {
        ...state,
        isFetching: false,
        data: action.payload.list
      }
    }
    case GET_RESOURCES_REJECTED: {
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
