import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import R from 'ramda'

import TodoList from './TodoList'

describe('todo list component', () => {
  const setup = (todos) => {
    let props = {
      todos: todos,
      onTodoClick: expect.createSpy()
    }
    let renderer = TestUtils.createRenderer()
    renderer.render(<TodoList {...props} />)
    let output = renderer.getRenderOutput()

    return {
      props,
      output,
      renderer
  }
}

  it ('should render a todo list', () => {
    const todo1 = {
      id: 1,
      onTodoClick: expect.createSpy(),
      completed: true,
      text: 'hello'
    }
    const todo2 = {
      id: 2,
      onTodoClick: expect.createSpy(),
      completed: false,
      text: 'world'
    }
    
    const {props, output} = setup([todo1, todo2])

    let outputTodos = output.props.children.props.children
    expect(outputTodos.length).toEqual(2)
    compareTodos(outputTodos[0], todo1)
  })
  const compareTodos = (actual, expected) => {
    expect(actual.key).toEqual(expected.id.toString())
    expect(actual.props.completed).toEqual(expected.completed)
    expect(actual.props.text).toEqual(expected.text)

    actual.props.onTodoClick(new Event())
    expect(expected.onTodoClick).toHaveBeenCalled()
  }
})
