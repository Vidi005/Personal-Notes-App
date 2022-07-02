import React from 'react'
import Swal from 'sweetalert2'

class NotesInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onTitleChangeEventHandler (event) {
    if (event.target.value.length <= 50) {
      this.setState(prevState => {
        return {
          ...prevState,
          title: event.target.value
        }
      })
    }
  }

  onBodyChangeEventHandler (event) {
    this.setState(prevState => {
      return {
        ...prevState,
        body: event.target.value
      }
    })
  }

  onSubmitEventHandler (event) {
    event.preventDefault()
    this.props.addNote(this.state)
    Swal.fire(
      'Berhasil membuat catatan',
      '',
      'success'
    )
  }

  render () {
    let charLeftReached = ''
    if (this.state.title.length === 50) {
      charLeftReached = 'Batas panjang maksimal judul tercapai'
    } else {
      charLeftReached = `Sisa karakter: ${50 - this.state.title.length}`
    }
    return (
      <div className="notes-app__input max-w-lg left-auto right-auto note-input border-2 border-gray-900 box-border rounded-lg shadow-xl m-8 p-4 mx-auto phone:m-2 phone:my-8 phone:max-w-full">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <input
            className="input-title w-full p-1 border-2 border-[#564c58] rounded-lg mt-4 mb-1"
            type="text"
            placeholder="Judul Catatan..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            required
          />
          <br/>
          <label
            className="text-justify"
            htmlFor="input-title">{charLeftReached}
          </label>
          <br/>
          <textarea
            className="w-full p-1 border-2 border-[#564c58] rounded-lg mt-2 mb-1 h-40 text-justify"
            type="text"
            placeholder="Tuliskan catatan di sini..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required
          ></textarea>
          <br/>
          <button
            className="w-full mt-4 p-2 bg-[#564c58] hover:bg-[#7f7e80] active:bg-gray-300 active:text-black text-white rounded-lg shadow-button"
            type="submit">Buat Catatan
          </button>
        </form>
      </div>
    )
  }
}

export default NotesInput
