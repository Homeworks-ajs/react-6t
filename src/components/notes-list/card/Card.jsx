import React from 'react'
import PropTypes from 'prop-types'

function Card({text}) {
  return (
    <div className="card w-25">
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string.isRequired
}

export default Card
