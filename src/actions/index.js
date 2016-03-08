export const ACTION_ADD_TODO = 'ADD_TODO'
export const ACTION_TOGGLE_TODO = 'TOGGLE_TODO'
export const ACTION_SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: ACTION_ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: ACTION_SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: ACTION_TOGGLE_TODO,
    id
  }
}
