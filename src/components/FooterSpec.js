import React from 'react'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'

import Footer from './Footer'
import {VISIBILITY_FILERS} from '../actions'

describe('footer component', () => {
  const setup = () => {
    let props = {
    }
    let renderer = TestUtils.createRenderer()
    renderer.render(<Footer/>)
    let output = renderer.getRenderOutput()
    return {
      props,
      output,
      renderer
    }
  }

  it('should render a footer', () => {
    const {output} = setup()

    let links = output.props.children
    expect(links[0].props.text).toEqual('All')
    expect(links[0].props.filter).toEqual(VISIBILITY_FILERS.SHOW_ALL)
    expect(links[1].props.text).toEqual('Active')
    expect(links[1].props.filter).toEqual(VISIBILITY_FILERS.SHOW_ACTIVE)
    expect(links[2].props.text).toEqual('Completed')
    expect(links[2].props.filter).toEqual(VISIBILITY_FILERS.SHOW_COMPLETED)
  })
})
