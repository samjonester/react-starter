import React from 'react'

import {VISIBILITY_FILERS} from '../actions'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    <FilterLink text="All" filter={VISIBILITY_FILERS.SHOW_ALL}/>
    <FilterLink text="Active" filter={VISIBILITY_FILERS.SHOW_ACTIVE}/>
    <FilterLink text="Completed" filter={VISIBILITY_FILERS.SHOW_COMPLETED}/>
  </p>
)

export default Footer
