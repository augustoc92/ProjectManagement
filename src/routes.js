import React from 'react'
import { Route, Switch } from 'react-router'
import App from './components/App'
import Clients from './components/client'
import Projects from './components/project'
import Resources from './components/resource'

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resources" component={Resources} />
      </Switch>
    </App>
  )
}

export default Routes
