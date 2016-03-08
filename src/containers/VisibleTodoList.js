import { connect } from 'react-redux'
import R from 'ramda'

import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return findCompleted(todos)
    case 'SHOW_ACTIVE':
      return findActive(todos)
  }
}

const filter = (completed) => (todos) => R.filter(t => t.completed === completed)(todos)
const findCompleted = filter(true)
const findActive = filter(false)

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
