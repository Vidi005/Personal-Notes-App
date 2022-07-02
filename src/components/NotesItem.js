import React from 'react'
import NoteItemBtnContainer from './NoteItemBtnContainer'
import NoteItemContent from './NoteItemContent'

const NoteItem = ({ title, date, body, isArchived, id, archive, onDelete }) => (
  <div className="note-item flex flex-col border border-gray-800 bg-[#dbe0d2] rounded-lg m-1 p-2">
    <NoteItemContent title={title} date={date} body={body} />
    <NoteItemBtnContainer title={title} isArchived={isArchived} id={id} archive={archive} onDelete={onDelete} />
  </div>
)

export default NoteItem
