import {ACTION_TYPES} from '../actions'

const todo = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ACTION_ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case ACTION_TYPES.ACTION_TOGGLE_TODO:
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.ACTION_ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    case ACTION_TYPES.ACTION_TOGGLE_TODO:
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
