import React, {PropTypes} from 'react'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'

//import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => (
  <div>
    <List>
      <ListItem
        primaryText="Item 1" />
      <ListItem
        primaryText="Item 2" />
    </List>
  </div>
)

export default TodoList
