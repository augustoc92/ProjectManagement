import initialState from './initialState'
import {
  GET_PROJECTS_FULFILLED,
  UPDATE_PROJECT_FULLFILED,
  UPDATE_PROJECT_REJETED,
  ADD_PROJECT_FULLFILED,
  REMOVE_PROJECT_FULFILLED,
} from './const'
import map from 'lodash/map'


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_FULFILLED: {
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
    case REMOVE_PROJECT_FULFILLED: {
      return {
        ...state,
        data: state.data.filter(x => x.id !== action.payload.id)
      }
    }
    case ADD_PROJECT_FULLFILED: {
      return {
        ...state,
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
