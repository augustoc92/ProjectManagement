import { combineReducers } from 'redux'
import projects from './projects/reducer'

const rootReducer = combineReducers({
  projects,
})

export default rootReducer
