import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getClients } from '../../redux/modules/clients/actions'
import getColumns from '../../redux/selectors/getColumns'
import client from './client'

const mapStateToProps = state => { 
  const cols = getColumns(state, 'client')
  return ({
    data: state.client.data,
    cols
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getClients,
}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(client)

