import React from 'react'
import NoteItem from './NotesItem'

const NoteList = ({ notes, archive, onDelete }) => notes.length > 0
  ? (
    <div className="note-list grid grid-cols-2 gap-1 mx-auto border-4 border-gray-900 rounded-lg shadow-lg m-4 p-2 phone:grid-cols-1 phone:gap-0">
      {
        notes.map(note => (
          <NoteItem
            key={note.id}
            id={note.id}
            isArchived={note.archived}
            archive={archive}
            onDelete={onDelete}
            {...note}
          />
        ))
      }
    </div>
    )
  : <h3 className="grid mx-auto border-2 border-gray-900 rounded-lg m-4 p-2 text-center">Tidak Ada Catatan</h3>

export default NoteList
