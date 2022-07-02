import React from 'react'
import NoteList from './NotesList'

const NotesContainer = ({ notes, archive, onDelete }) => {
  const activeNotes = notes.filter(note => note.archived === false)
  const archivedNotes = notes.filter(note => note.archived === true)
  return (
    <div className="notes-app__notes-container flex phone:m-1 tablet:flex-wrap">
      <div className="notes-app__active-notes basis-1/2 mt-2 mx-4 mb-16 tablet:basis-full tablet:mb-4 phone:m-1">
        <h2 className="text-center">Catatan Aktif</h2>
        <NoteList notes={activeNotes} archive={archive} onDelete={onDelete} />
      </div>
      <div className="notes-app__archived-notes basis-1/2 mt-2 mx-4 mb-16 tablet:basis-full phone:m-1 tablet:mb-16">
        <h2 className="text-center">Catatan Diarsipkan</h2>
        <NoteList notes={archivedNotes} archive={archive} onDelete={onDelete} />
      </div>
    </div>
  )
}

export default NotesContainer
