import initialState from './initialState'
import {
  GET_CLIENTS_FULFILLED,
  GET_CLIENTS_PENDING,
  GET_CLIENTS_REJECTED
} from './const'
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS_PENDING: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case GET_CLIENTS_FULFILLED: {
      return {
        ...state,
        isFetching: false,
        data: action.payload.list
      }
    }
    case GET_CLIENTS_REJECTED: {
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
