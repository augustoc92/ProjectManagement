import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getResources } from '../../redux/modules/resources/actions'
import getColumns from '../../redux/selectors/getColumns'
import resource from './resource'

const mapStateToProps = state => { 
  const cols = getColumns(state, 'resources')
  return ({
    data: state.resources.data,
    cols
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getResources,
}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(resource)

