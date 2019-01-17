import initialState from './initialState'
import {
  GET_RESOURCES_FULFILLED,
  UPDATE_RESOURCE_FULLFILED,
  UPDATE_RESOURCE_REJETED,
  ADD_RESOURCE_FULLFILED,
  ADD_RESOURCE_REJECTED,
  REMOVE_RESOURCE_FULFILLED,
} from './const'
import map from 'lodash/map'


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_RESOURCES_FULFILLED: {
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
    case REMOVE_RESOURCE_FULFILLED: {
      return {
        ...state,
        data: state.data.filter(x => x.id !== action.payload.id)
      }
    }

    case ADD_RESOURCE_FULLFILED: {
      return {
        ...state,
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
