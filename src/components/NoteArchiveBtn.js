import React from 'react'

const ArchiveBtn = ({ id, isArchived, archive }) => isArchived
  ? (
    <button className="note-item__archive-btn basis-1/2 border-2 border-gray-700 bg-[#8e9387] hover:bg-[#5a5e54] rounded-lg p-1 mr-1 shadow-button" onClick={() => archive(id)}>
      <img className="inline h-7" src="/images/unarchive.svg" alt="Unarchive"/>
      <span className="text-white ml-2 text-sm">Kembalikan</span>
    </button>
    )
  : (
    <button className="note-item__archive-btn basis-1/2 border-2 border-gray-700 bg-[#584c53] hover:bg-[#857a80] rounded-lg p-1 mr-1 shadow-button" onClick={() => archive(id)}>
      <img className="inline h-7" src="/images/archive.svg" alt="Archive"/>
      <span className="text-white ml-2 text-sm">Arsipkan</span>
    </button>
    )

export default ArchiveBtn
