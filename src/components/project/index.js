import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProjects, removeItem } from '../../redux/modules/projects/actions'
import { toggleSideBar, selectRow } from '../../redux/modules/ui/actions'
import getColumns from '../../redux/selectors/getColumns'
import project from './project'

const mapStateToProps = state => { 
  const cols = getColumns(state, 'projects')
  return ({
    data: state.projects.data,
    collapsed: state.ui.collapsed,
    cols
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getProjects,
  removeItem,
  toggleSideBar,
  selectRow
}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(project)

