import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getClients, removeItem } from '../../redux/modules/clients/actions'
import { selectRow, toggleSideBar } from '../../redux/modules/ui/actions'
import getColumns from '../../redux/selectors/getColumns'
import client from './client'

const mapStateToProps = state => { 
  const cols = getColumns(state, 'client')
  return ({
    data: state.client.data,
    collapsed: state.ui.collapsed,
    cols
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getClients,
  selectRow,
  removeItem,
  toggleSideBar,
}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(client)

