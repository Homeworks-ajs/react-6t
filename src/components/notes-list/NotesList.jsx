import React from 'react'
import Card from './card/Card'
import PropTypes from 'prop-types'

function NotesList({ list }) {
  return (
    <div className="row">
      {
        !list.length
          ? <div className="list-is-empty">Нет записей</div>
          : list.map(({ text, id }) => <Card text={text} key={id} />)
      }
    </div>
  )
}

NotesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }))
}

export default NotesList
