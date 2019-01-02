import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import ClientForm from './ClientForm'
import {
  updateItem,
  addItem,
} from '../../../redux/modules/clients/actions'
import { 
  toggleSideBar
} from '../../../redux/modules/ui/actions'


const mapStateToProps = (state) => {
  const { selectedRow } = state.ui
  return ({
    selectedRow,
    initialValues: {
      ...selectedRow,
    }
  })
}

const validate = (values) => {
  const errors = {}
  const requiredFields = ['Nombre', 'Contrato']
  requiredFields.forEach((field) => {
    if (!values[field]) errors[field] = 'Required'
  })
  return errors
}

const onSubmit = (values, dispatch, props) => {
  const { collapsed, route } = props
  if (values.id) dispatch(updateItem(values, route))
  else dispatch(addItem(values, route))
  dispatch(reset('contract_form'))
  dispatch(toggleSideBar(collapsed))
}

const formConfig = {
  form: 'contract_form',
  onSubmit,
  validate,
  enableReinitialize: true,
}

export default connect(mapStateToProps)(reduxForm(formConfig)(ClientForm))
