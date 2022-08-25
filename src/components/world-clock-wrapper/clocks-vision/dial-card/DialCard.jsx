import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './DialCard.css';
import Arrow from './arrow/Arrow';

function DialCard({ onRemove, id, clockTitle, date }) {
  let day = new Date();
  const DEG = 6;

  const [state, setState] = useState({
    hh: day.getHours() * 30,
    mm: day.getMinutes() * DEG,
    ss: day.getSeconds() * DEG
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const day = new Date();
      setState({
        hh: day.getHours() * 30,
        mm: day.getMinutes() * DEG,
        ss: day.getSeconds() * DEG
      })
    }, 1000)
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="card clock-block w-25 mx-1 rounded-3 bg-light shadow ">
      <div className="meta-wrapper d-flex flex-column">
        <button type="button" class="btn p-0 align-self-end" 
          style={{width: "10%"}} onClick={onRemove} data-id={id}>&#10060;</button>
        <h5 class="card-title px-1 py-1 text-center">{clockTitle}</h5></div>
      <div class="card-body d-flex justify-content-center">
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
  date: PropTypes.any 
}

export default DialCard
