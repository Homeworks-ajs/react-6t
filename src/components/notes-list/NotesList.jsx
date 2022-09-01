import React from 'react'
import Card from './card/Card'
import PropTypes from 'prop-types'

function NotesList({ list, onRemove }) {
  return (
    <div className="row list-notes">
      {
        !list.length
          ? <div className="list-is-empty">Нет записей</div>
          : list.map(({ text, id }) => <Card text={text} key={id} cardId={id} onRemove={onRemove}/>)
      }
    </div>
  )
}

NotesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })),
  onRemove: PropTypes.func.isRequired
}

export default NotesList
