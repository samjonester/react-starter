import R from 'ramda'

import reducer from './todos'
import {ACTION_TYPES} from '../actions'

describe('todos reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })


  it('should add todo', () => {
    const existingTodo = {id: 0, text: 'hello', completed: true}
    const newId = 1
    const newText = 'world'
    expect(reducer([existingTodo], {type: ACTION_TYPES.ACTION_ADD_TODO, id: newId, text: newText})).toEqual([existingTodo, {id: newId, text: newText, completed: false}])
  })


  it('should toggle todos', () => {
    const todo0 = {id: 0, text: 'hello', completed: true}
    const todo1 = {id: 1, text: 'world', completed: false}

    expect(reducer([todo0, todo1], {type: ACTION_TYPES.ACTION_TOGGLE_TODO, id: 1}))
      .toEqual([todo0, R.merge(todo1, { completed: true })])

    expect(reducer([todo0, todo1], {type: ACTION_TYPES.ACTION_TOGGLE_TODO, id: 0}))
      .toEqual([R.merge(todo0, { completed: false }), todo1])
  })


  it('should pass through when not updating todos', () => {
    const state = 'bogus'
    expect(reducer(state, {type: 'foobar'})).toEqual(state)
  }) 
})
