import {ACTION_SET_VISIBILITY_FILTER} from '../actions'

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case ACTION_SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
