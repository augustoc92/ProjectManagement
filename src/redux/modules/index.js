import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import projects from './projects/reducer'
import client from './clients/reducer'
import resources from './resources/reducer'
import ui from './ui/reducer'

const rootReducer = combineReducers({
  form: formReducer,
  projects,
  client,
  resources,
  ui
})

export default rootReducer
