
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from './redux/modules'

export default function configureStore() {
  const enhancer = composeWithDevTools()
  return createStore(rootReducer, enhancer)
}
