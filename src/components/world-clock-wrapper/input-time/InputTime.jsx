import React from 'react'
import PropTypes from 'prop-types'

function InputTime({ onAppend }) {
  return (
    <form action="" className="row py-3 my-3 px-1">
      <div className="col d-flex flex-column">
        <label htmlFor="point">Название</label>
        <input type="text" name="point" maxLength={25} minLength={3} defaultValue={"Москва"} required/>
      </div>
      <div className="col d-flex flex-column">
      <label htmlFor="point">Временная зона</label>
        <input type="number" name='time_zone' max={14} min={-11} defaultValue={0} required/>
      </div>
      <div className="col d-flex align-items-end">
        <button type="button" className="btn btn-outline-secondary" onClick={onAppend}>Добавить</button>
      </div>
    </form>
  )
}

InputTime.propTypes = {
  onAppend: PropTypes.func.isRequired
}

export default InputTime
