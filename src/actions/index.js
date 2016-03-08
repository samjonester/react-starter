export const ACTION_TYPES = {
  ACTION_ADD_TODO : 'ADD_TODO',
  ACTION_TOGGLE_TODO : 'TOGGLE_TODO',
  ACTION_SET_VISIBILITY_FILTER : 'SET_VISIBILITY_FILTER'
}

export const VISIBILITY_FILERS = {
  SHOW_ALL : 'SHOW_ALL',
  SHOW_COMPLETED : 'SHOW_COMPLETED',
  SHOW_ACTIVE : 'SHOW_ACTIVE'
}

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: ACTION_TYPES.ACTION_ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: ACTION_TYPES.ACTION_SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: ACTION_TYPES.ACTION_TOGGLE_TODO,
    id
  }
}
