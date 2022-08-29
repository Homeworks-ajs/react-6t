import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './DialCard.css';
import Arrow from './arrow/Arrow';
import { getDateWithOffset, getDialArrowData } from './dateFunctions';

function DialCard({ onRemove, id, clockTitle, timeZone }) {
  const [state, setState] = useState(getDialArrowData(getDateWithOffset(timeZone)));

  useEffect(() => {
    const interval = setInterval(() => {
      setState(getDialArrowData(getDateWithOffset(timeZone)))
    }, 1000)
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="card clock-block w-25 mx-1 rounded-3 bg-light shadow ">
      <div className="meta-wrapper d-flex flex-column">
        <button type="button" className="btn p-0 align-self-end"
          style={{ width: "10%" }} onClick={onRemove} data-id={id}>&#10060;</button>
        <h5 className="card-title px-1 py-1 text-center">{clockTitle}</h5></div>
      <div className="card-body d-flex justify-content-center">
        <div className="clock">
          <Arrow type={"hour"} name={"hr"} transform={`rotateZ(${(state.hh) + (state.mm / 12)}deg)`} />
          <Arrow type={"min"} name={"mn"} transform={`rotateZ(${state.mm}deg)`} />
          <Arrow type={"sec"} name={"sc"} transform={`rotateZ(${state.ss}deg)`} />
        </div>
      </div>
    </div>
  )
}

DialCard.propTypes = {
  onRemove: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  clockTitle: PropTypes.string.isRequired,
  timeZone: PropTypes.number.isRequired
}

export default DialCard
