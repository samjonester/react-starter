import React, {PropTypes} from 'react'
import R from 'ramda'
import List from 'material-ui/lib/lists/list'

import Todo from './Todo'

const createTodo = (onTodoClick) => (todo) => {
  return (
    <Todo 
      key={todo.id}
      {...todo}
      onClick={() => onTodoClick(todo.id)}
    />
  )
}

const TodoList = ({todos, onTodoClick}) => (
  <div style={{
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }}>
    <List style={{
      width: 550
    }}>
    {R.map(createTodo(onTodoClick))(todos)}
    </List>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
