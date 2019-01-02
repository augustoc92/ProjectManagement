import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import ResourcesForm from './ResourcesForm'
import {
  updateItem,
  addItem,
} from '../../../redux/modules/resources/actions'
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
  const requiredFields = ['Proyecto', 'Nombre']
  requiredFields.forEach((field) => {
    if (!values[field]) errors[field] = 'Required'
  })
  return errors
}

const onSubmit = (values, dispatch, props) => {
  const { collapsed } = props
  if (values.id) dispatch(updateItem(values))
  else dispatch(addItem(values))
  dispatch(reset('resources_form'))
  dispatch(toggleSideBar(collapsed))
}

const formConfig = {
  form: 'resources_form',
  onSubmit,
  validate,
  enableReinitialize: true,
}

export default connect(mapStateToProps)(reduxForm(formConfig)(ResourcesForm))
