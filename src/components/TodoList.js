import React, {PropTypes} from 'react'
import List from 'material-ui/lib/lists/list'

import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => (
  <div style={{
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }}>
    <List style={{
      width: 550
    }}>
      {todos.map(todo =>
       <Todo 
         key={todo.id}
         {...todo}
         onClick={() => onTodoClick(todo.id)}
       />
     )}
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
