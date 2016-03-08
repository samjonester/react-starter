import React from 'react'

import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    <FilterLink text="All" filter="SHOW_ALL"/>
    <FilterLink text="Active" filter="SHOW_ACTIVE"/>
    <FilterLink text="Completed" filter="SHOW_COMPLETED"/>
  </p>
)

export default Footer
