import React from 'react'
import PropTypes from 'prop-types'

function Arrow({type, name, transform}) {
  return (
    <div className={type}>
      <div className={name} style={{ transform: transform}}></div>
    </div>
  )
}

Arrow.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  transform: PropTypes.string.isRequired
}

export default Arrow
