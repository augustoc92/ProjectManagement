import initialState from './initialState'
import {
  GET_CLIENTS_PENDING,
  GET_CLIENTS_FULFILLED,
  GET_CLIENTS_REJECTED,
  REMOVE_CLIENT_FULFILLED,
  REMOVE_CLIENT_REJECTED,
  ADD_CLIENT_FULLFILED,
  ADD_CLIENT_REJECTED,
  UPDATE_CLIENT_FULLFILED,
  UPDATE_CLIENT_REJETED
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
    case REMOVE_CLIENT_FULFILLED: {
      return {
        ...state,
        data: state.data.filter(x => x.id !== action.payload.id)
      }
    }
    case REMOVE_CLIENT_REJECTED: {
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    }
    case ADD_CLIENT_FULLFILED: {
      const { newItem } = action.payload
      const newList = [...state.data]
      newList.push(newItem)
      return {
        ...state,
        data: newList
      }
    }
    case ADD_CLIENT_REJECTED: {
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    }
    case UPDATE_CLIENT_REJETED: {
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    }
    case UPDATE_CLIENT_FULLFILED: {
      const { item } = action.payload
      const index = state.data.findIndex(x => x.id === item.id)
      const newList = [...state.data]
      newList[index] = item
      return {
        ...state,
        data: newList
      }
    }
    default:
      return state

  }

}

export default reducer
