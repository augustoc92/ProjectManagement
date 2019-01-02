import initialState from './initialState'
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
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_PENDING: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case GET_DATA_FULFILLED: {
      return {
        ...state,
        isFetching: false,
        data: action.payload.list
      }
    }
    case GET_DATA_REJECTED: {
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    }
    case REMOVE_ITEM_FULFILLED: {
      return {
        ...state,
        data: state.data.filter(x => x.id !== action.payload.id)
      }
    }
    case REMOVE_ITEM_REJECTED: {
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    }
    case ADD_ITEM_FULLFILED: {
      const { newItem } = action.payload
      const newList = [...state.data]
      newList.push(newItem)
      return {
        ...state,
        data: newList
      }
    }
    case ADD_ITEM_REJECTED: {
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    }
    case UPDATE_ITEM_REJETED: {
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    }
    case UPDATE_ITEM_FULLFILED: {
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
