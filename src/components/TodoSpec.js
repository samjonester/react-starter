import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Todo from './todo'

describe('todo component', () => {
  const todoText = 'foobar'
  const setup = (completed) => {
    let props = {
      completed: completed,
      text: todoText,
      onClick: expect.createSpy()
    }
    let renderer = TestUtils.createRenderer()
    renderer.render(<Todo {...props} />)
    let output = renderer.getRenderOutput()

    return {
      props,
      output,
      renderer
    }
  }

  it('should render not completed', () => {
    const completed = false
    const {props, output} = setup(completed)

    expect(output.props.primaryText).toEqual(todoText)
    output.props.onClick(new Event())
    expect(output.props.onClick.calls.length).toBe(1)

    expect(output.props.style.textDecoration).toNotExist()
  })

  it('should render completed', () => {
    const completed = true
    const {props, output} = setup(completed)

    expect(output.props.primaryText).toEqual(todoText)
    output.props.onClick(new Event())
    expect(output.props.onClick.calls.length).toBe(1)

    expect(output.props.style.textDecoration).toExist()
  })
})
