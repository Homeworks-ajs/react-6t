import React from 'react'
import PropTypes from 'prop-types';

function Header({onUpdate}) {
  return (
    <div className="row d-flex flex-row" >
      <h2 className='w-25'>Notes</h2>
      <button type="button" className="btn btn-light rounded w-25" onClick={onUpdate}>Update</button>
    </div>
  )
}

Header.propTypes = {
  onUpdate: PropTypes.func.isRequired
}

export default Header
