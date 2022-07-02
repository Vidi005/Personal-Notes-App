import React from 'react'
import ArchiveBtn from './NoteArchiveBtn'
import DeleteBtn from './NoteDeleteBtn'

const NoteItemBtnContainer = ({ title, isArchived, archive, id, onDelete }) => (
  <div className="note-item__buttons flex my-1">
    <ArchiveBtn id={id} isArchived={isArchived} archive={archive} />
    <DeleteBtn title={title} id={id} onDelete={onDelete} />
  </div>
)

export default NoteItemBtnContainer
