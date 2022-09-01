import React from 'react'
import PropTypes from 'prop-types'

function Card({text, cardId, onRemove}) {
  return (
    <div className="card w-25 mx-3">
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
      <button type="button" class="btn btn-danger my-1" data-id={cardId} onClick={onRemove}>Remove</button>
    </div>
  )
}

Card.propTypes = {
  text: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Card
