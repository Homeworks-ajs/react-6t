import React, { useState } from 'react'
import shortid from 'shortid';
import ClocksVisions from './clocks-vision/ClocksVisions';
import InputTime from './input-time/InputTime';

export default function WorldCLockWrapper() {
  const [state, setState] = useState([]);
  const onAppend = (evt) => {
    evt.preventDefault();
    const [title, timeZone] = evt.target.form;

    setState([...state, {
      _id: shortid.generate(),
      clockTitle: title.value,
      timeZone: timeZone.valueAsNumber
    }])
  }

  const onRemove = (evt) => {
    evt.preventDefault();
    const idButton = evt.target.dataset.id;
    setState(state.filter(({_id}) => _id !== idButton))
  }

  return (
    <div className="col">
      <InputTime onAppend={onAppend} />
      <ClocksVisions clocks={state} onRemove={onRemove} />
    </div>
  )
}
