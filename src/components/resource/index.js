import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getResources, removeItem } from '../../redux/modules/resources/actions'
import { selectRow, toggleSideBar } from '../../redux/modules/ui/actions'
import getColumns from '../../redux/selectors/getColumns'
import resource from './resource'

const mapStateToProps = state => { 
  const cols = getColumns(state, 'resources')
  return ({
    data: state.resources.data,
    collapsed: state.ui.collapsed,
    cols
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getResources,
  selectRow,
  removeItem,
  toggleSideBar,
}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(resource)

