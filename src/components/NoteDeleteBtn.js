import React from 'react'
import Swal from 'sweetalert2'

const DeleteBtn = ({ title, id, onDelete }) => (
  <button className="note-item__del-btn basis-1/2 border-2 border-gray-700 bg-white hover:bg-gray-200 rounded-lg p-1 ml-1 shadow-button" onClick={() => {
    Swal.fire({
      title: `Apakah Anda ingin menghapus Catatan "${title}"?`,
      text: 'Catatan yang sudah dihapus tidak dapat dipulihkan!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'blue',
      cancelButtonColor: 'red',
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak'
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Catatan berhasil dihapus', '', 'success')
        return onDelete(id)
      }
    })
  }}>
    <img className="inline h-7" src="/images/delete.svg" alt="Delete"/>
    <span className="text-black ml-2 text-sm">Hapus</span>
  </button>
)

export default DeleteBtn
