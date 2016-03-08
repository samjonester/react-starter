import React from 'react'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'

import AddTodoForm from './AddTodoForm'

describe('add todo form component', () => {
  const setup = () => {
    let props = {
      onSubmit: expect.createSpy()
    }

    let renderer = TestUtils.createRenderer()
    renderer.render(<AddTodoForm {...props} />)
    let output = renderer.getRenderOutput()

    return {
      props,
      output,
      renderer
    }
  }

  it('should render an add todo form', () => {
    const {props, output} = setup()

    const [header, form] = output.props.children
    const [input, submitButton] = form.props.children

    expect(header.props.title).toEqual('Add an Item')
    expect(input).toExist()
    const fakeInputValue = 'foobar'
    input.ref({
      getValue: () => fakeInputValue,
      input: { value: '' }
    })
    form.props.onSubmit(new Event())
    expect(props.onSubmit).toHaveBeenCalledWith(fakeInputValue)
    expect(submitButton.props.label).toEqual('Add')
  })
})
