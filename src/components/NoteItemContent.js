import React from 'react'
import { showFormattedDate } from '../utils/data'

const NoteItemContent = ({ title, date, body }) => (
  <div className="note-item__content grow">
    <h3>{title}</h3>
    <p className="text-gray-500 text-sm my-2">{showFormattedDate(date)}</p>
    <p className="text-justify mb-2">{body}</p>
  </div>
)

export default NoteItemContent
