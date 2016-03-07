import React from 'react'
import {connect} from 'react-redux'
import Card from 'material-ui/lib/card/card'
import CardHeader from 'material-ui/lib/card/card-header'
import TextField from 'material-ui/lib/text-field'
import RaisedButton from 'material-ui/lib/raised-button'
import Divider from 'material-ui/lib/divider'

//import {addTodo} from '../actions'

let AddTodo = ({dispatch}) => {
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
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
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
      <RaisedButton label="Add" />
  </form>
</Card>
  )
}

//AddTodo = connect()(AddTodo)
export default AddTodo
