import React, { useEffect, useState } from 'react'
import fetchApi from '../../fetch-api/fetchApi';
import NotesList from '../notes-list/NotesList';

function AppContainer() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetchApi("/notes").then( data => setState(data))
  }, [])
  return (
    <div className="row">
      <NotesList list={state} />
    </div>
  )
}

export default AppContainer
