import React from 'react'
import { Input, Button } from 'antd'
import { map, omit } from 'lodash'
import { Field } from 'redux-form'
import { makeField } from '../../../helpers/makefield'
import styles from '../Form.module.css'

const AInput = makeField(Input)

export default class ProjectForm extends React.Component {
  renderInput = (key) => {
    return (
      <Field
        id={key}
        name={key}
        className={styles.value}
        component={AInput}
        type="text"
      />
    )
  }

  renderFields = () => {
    const { 
      selectedRow
    } = this.props
    return (
      map(omit(selectedRow, ['id']), (value, key) => (
        <div
          key={key}
          className={styles.field}
        >
          <div className={styles.prop}>
            {key.replace(/_/g, ' ')}
          </div>
          {this.renderInput(key)}
        </div>
      ))
    )
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <div className={styles.fieldsContainer}>
          { this.renderFields() }
          <Button
            onClick={handleSubmit}
            icon="check"
            type="primary"
          />
        </div>
      </div>
    )
  }
}