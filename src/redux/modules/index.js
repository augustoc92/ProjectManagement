import { combineReducers } from 'redux'
import projects from './projects/reducer'
import client from './clients/reducer'
import resources from './resources/reducer'

const rootReducer = combineReducers({
  projects,
  client,
  resources
})

export default rootReducer
