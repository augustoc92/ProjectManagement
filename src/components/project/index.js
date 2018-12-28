import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProjects } from '../../redux/modules/projects/actions'
import getColumns from '../../redux/selectors/getColumns'
import project from './project'

const mapStateToProps = state => { 
  const cols = getColumns(state, 'projects')
  return ({
    data: state.projects.data,
    cols
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getProjects,
}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(project)

