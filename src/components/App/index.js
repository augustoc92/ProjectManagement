import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = state => { 
  return ({
    data: state.projects.data
  })
}

export default connect(mapStateToProps)(App)

