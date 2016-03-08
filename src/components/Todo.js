import React, {PropTypes} from 'react'
import ListItem from 'material-ui/lib/lists/list-item'

const completedStyle = {
  textDecoration: 'line-through',
  fontStyle: 'italic',
  color: '#808080'
}

const activeStyle = {}

const Todo = ({onClick, completed, text}) => (
  <ListItem
    primaryText={text}
    style={completed ? completedStyle : activeStyle}
    onClick={onClick}
  />
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
