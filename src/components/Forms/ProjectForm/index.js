import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import ProjectForm from './ProjectForm'
import {
  updateItem,
  addItem,
} from '../../../redux/modules/projects/actions'
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
  const requiredFields = ['Nombre', 'Cliente']
  requiredFields.forEach((field) => {
    if (!values[field]) errors[field] = 'Required'
  })
  return errors
}

const onSubmit = (values, dispatch, props) => {
  const { collapsed } = props
  if (values.id) dispatch(updateItem(values))
  else dispatch(addItem(values))
  dispatch(reset('project_form'))
  dispatch(toggleSideBar(collapsed))
}

const formConfig = {
  form: 'project_form',
  onSubmit,
  validate,
  enableReinitialize: true,
}

export default connect(mapStateToProps)(reduxForm(formConfig)(ProjectForm))
