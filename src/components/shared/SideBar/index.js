import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleSideBar } from '../../../redux/modules/ui/actions'
import SideBar from './SideBar'


const mapStateToProps = (state) => {
  return ({
    selectedRow: state.projects.selectedRow,
    collapsed: state.ui.collapsed,
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleSideBar,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
