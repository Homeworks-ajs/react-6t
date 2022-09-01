import React, { useEffect, useState } from 'react'
import fetchApi from '../../fetch-api/fetchApi';
import Header from '../heaher/Header';
import ListInput from '../list-input/ListInput';
import NotesList from '../notes-list/NotesList';

function AppContainer() {
  const [state, setState] = useState([]);
  useEffect(() => {
    updateAllCards();
  }, [])

  const onSubmit = evt => {
    evt.preventDefault();
    const [text] = evt.target.form;
    fetchApi("POST")({text: text.value})(ifOkThenUpdate);
  }

  const onUpdate = evt => {
    evt.preventDefault();
    updateAllCards();
  }

  const onRemove = evt => {
    evt.preventDefault();
    const id = evt.target.dataset.id;
    fetchApi("DELETE")(id)(ifOkThenUpdate)
  }

  function ifOkThenUpdate(res) {
    if(res.statusText === "OK") {
      updateAllCards();
    }
  }

  function updateAllCards() {
    fetchApi('GET')()(date => setState(date))
  }

  return (
    <div className="row">
      <Header onUpdate={onUpdate}/>
      <ListInput onSubmitForm={onSubmit}/>
      <NotesList list={state} onRemove={onRemove}/>
    </div>
  )
}

export default AppContainer
