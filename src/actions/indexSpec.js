import * as actions from './index'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'foobar'
    expect(actions.addTodo(text)).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: text
    })

    const text2 = 'foobaz'
    expect(actions.addTodo(text2)).toEqual({
      type: 'ADD_TODO',
      id: 1,
      text: text2
    })
  })


  it('should create an action to update the visibility filter', () => {
    const filter = 'WHOLE_ENCHILADA'
    expect(actions.setVisibilityFilter(filter)).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter
    })
  })


  it('should create an action to toggle todo status', () => {
    const id = 42
    expect(actions.toggleTodo(id)).toEqual({
      type: 'TOGGLE_TODO',
      id
    })
  })
})
