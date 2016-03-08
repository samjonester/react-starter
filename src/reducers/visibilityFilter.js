import {ACTION_TYPES, VISIBILITY_FILERS} from '../actions'

const visibilityFilter = (state = VISIBILITY_FILERS.SHOW_ALL, action) => {
  switch (action.type) {
    case ACTION_TYPES.ACTION_SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
