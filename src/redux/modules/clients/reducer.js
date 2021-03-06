import initialState from './initialState'
import {
  GET_CLIENTS_FULFILLED,
  REMOVE_CLIENT_FULFILLED,
  REMOVE_CLIENT_REJECTED,
  ADD_CLIENT_FULLFILED,
  ADD_CLIENT_REJECTED,
  UPDATE_CLIENT_FULLFILED,
  UPDATE_CLIENT_REJETED
} from './const'
import map from 'lodash/map'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS_FULFILLED: {
      const array = map(action.payload, (item, key) => {
        return {
          ...item,
          id: key,
        }
      })
      return {
        ...state,
        isFetching: false,
        data: array
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
      return {
        ...state,
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
