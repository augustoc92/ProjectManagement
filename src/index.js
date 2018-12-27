import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import './index.css'
import * as serviceWorker from './serviceWorker';
import configureStore from './store'


const store = configureStore()

render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister();