import React from 'react'
import PropTypes from 'prop-types'
import DialCard from './dial-card/DialCard'

function ClocksVisions({clocks, onRemove}) {
  return (
    <div className="row">
      {clocks.map( el => <DialCard key={el._id} id={el._id} clockTitle={el.clockTitle} onRemove={onRemove} timeZone={el.timeZone}/>)}
    </div>
  )
}

ClocksVisions.propTypes = {
  clocks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      clockTitle: PropTypes.string.isRequired,
      timeZone: PropTypes.number.isRequired
    })
  ),
  onRemove: PropTypes.number.isRequired
}

export default ClocksVisions
