import React from 'react'
import { Route, Switch } from 'react-router'
import App from './components/App'
import NotFound from './components/NotFound/NotFound'
import TableScreen from './components/TableScreen'

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/notfound" component={NotFound} />
        <Route exact path="/:tablename" component={TableScreen} />
      </Switch>
    </App>
  )
}

export default Routes
