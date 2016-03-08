import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Link from './Link'

describe('link componenet', () => {
  const linkText = 'foobar'
  const setup = (active) => {
    let props = {
      active: active,
      text: linkText,
      onClick: expect.createSpy()
    }

    let renderer = TestUtils.createRenderer()
    renderer.render(<Link {...props} />)
    let output = renderer.getRenderOutput()

    return {
      props,
      output,
      renderer
    }
  }

  it('should render active', () => {
    const active = true
    const {props, output} = setup(active)

    expect(output.props.disabled).toEqual(active)
    expect(output.props.label).toEqual(linkText)
    output.props.onClick(new Event())
    expect(props.onClick.calls.length).toBe(1)
  })
})
