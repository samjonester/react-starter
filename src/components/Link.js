import React, {PropTypes} from 'react'

import FlatButton from 'material-ui/lib/flat-button'


const Link = ({active, text, onClick}) => {
  return (
    <FlatButton label={text}
      secondary={true}
      disabled={active}
      onClick={e => {
        e.preventDefault()
        onClick()
      }} />
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
