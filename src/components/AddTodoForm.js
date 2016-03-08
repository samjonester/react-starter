import React, {PropTypes} from 'react'

import Card from 'material-ui/lib/card/card'
import CardHeader from 'material-ui/lib/card/card-header'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'

const AddTodoForm = ({onSubmit}) => {
  let input
  return (
    <Card style={{
      width: 560, 
      margin: '0 auto'
    }}>
    <CardHeader
      title="Add an Item"
    />
    <form 
      style={{
        width: 450,
        padding: 50,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
      onSubmit={e => {
        e.preventDefault()
        let todoVal = input.getValue()
        if (todoVal.trim()) {
          onSubmit(todoVal)
          input.input.value=''
        }
      }}>
      <TextField
        hintText="Todo"
        style={{
          width: 450
        }}
        ref={node => {
          input = node
        }}
      />
      <RaisedButton label="Add" 
        type="submit" 
        primary={true}
      />
    </form>
  </Card>

  )
}

AddTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AddTodoForm
