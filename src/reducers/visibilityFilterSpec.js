import reducer from './visibilityFilter'
import {ACTION_TYPES} from '../actions'

describe('visibility filter reducer', () => {
  it('should set the initial visibility filter', () => {
    expect(reducer(undefined, {})).toEqual('SHOW_ALL')
  })


  it('should update the visibility filter', () => {
    const filter = 'foobar'
    expect(reducer(undefined, {type: ACTION_TYPES.ACTION_SET_VISIBILITY_FILTER, filter: filter})).toEqual(filter)
    expect(reducer('bogus', {type: ACTION_TYPES.ACTION_SET_VISIBILITY_FILTER, filter: filter})).toEqual(filter)
  })


  it('should pass through when not updating filter', () => {
    const state = 'bogus'
    expect(reducer(state, {type: 'foobar'})).toEqual(state)
  })
})
