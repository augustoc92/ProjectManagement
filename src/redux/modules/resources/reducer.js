import initialState from './initialState'
import {
  GET_RESOURCES_PENDING,
  GET_RESOURCES_FULFILLED,
  GET_RESOURCES_REJECTED,
  UPDATE_RESOURCE_FULLFILED,
  UPDATE_RESOURCE_REJETED,
  ADD_RESOURCE_FULLFILED,
  ADD_RESOURCE_REJECTED,
  REMOVE_RESOURCE_FULFILLED,
  REMOVE_RESOURCE_REJECTED,
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
    case REMOVE_RESOURCE_FULFILLED: {
      return {
        ...state,
        data: state.data.filter(x => x.id !== action.payload.id)
      }
    }
    case REMOVE_RESOURCE_REJECTED: {
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    }
    case ADD_RESOURCE_FULLFILED: {
      const { newItem } = action.payload
      const newList = [...state.data]
      newList.push(newItem)
      return {
        ...state,
        data: newList
      }
    }
    case ADD_RESOURCE_REJECTED: {
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    }
    case UPDATE_RESOURCE_REJETED: {
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    }
    case UPDATE_RESOURCE_FULLFILED: {
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
