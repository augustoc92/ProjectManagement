import initialState from './initialState'
import {
  GET_PROJECTS_FULFILLED,
  GET_PROJECTS_PENDING,
  GET_PROJECTS_REJECTED,
  UPDATE_PROJECT_FULLFILED,
  UPDATE_PROJECT_REJETED,
  ADD_PROJECT_FULLFILED,
  ADD_PROJECT_REJECTED,
  REMOVE_PROJECT_FULFILLED,
  REMOVE_PROJECT_REJECTED,
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
    case REMOVE_PROJECT_FULFILLED: {
      return {
        ...state,
        data: state.data.filter(x => x.id !== action.payload.id)
      }
    }
    case REMOVE_PROJECT_REJECTED: {
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    }
    case ADD_PROJECT_FULLFILED: {
      const { newItem } = action.payload
      const newList = [...state.data]
      newList.push(newItem)
      return {
        ...state,
        data: newList
      }
    }
    case ADD_PROJECT_REJECTED: {
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    }
    case UPDATE_PROJECT_REJETED: {
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      }
    }
    case UPDATE_PROJECT_FULLFILED: {
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
