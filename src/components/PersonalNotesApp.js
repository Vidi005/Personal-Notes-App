import React from 'react'
import { getInitialData } from '../utils/data'
import NotesContainer from './NotesContainer'
import NotesFooter from './NotesFooter'
import NotesHeader from './NotesHeader'
import NotesInput from './NotesInput'
import NotesSearch from './NotesSearch'

class PersonalNotesApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      notes: getInitialData(),
      query: []
    }

    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this)
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    this.onArchiveHandler = this.onArchiveHandler.bind(this)
    this.onDeleteHandler = this.onDeleteHandler.bind(this)
  }

  onSearchNoteHandler (noteTitle) {
    const title = noteTitle.title.toLowerCase()
    this.setState({ query: title })
  }

  onAddNoteHandler ({ title, body }) {
    this.setState(prevState => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            date: new Date().toISOString(),
            archived: false
          }
        ]
      }
    })
  }

  onArchiveHandler (id) {
    const notes = this.state.notes.map(note => {
      if (note.id === id) {
        if (note.archived) {
          return { ...note, archived: false }
        } else {
          return { ...note, archived: true }
        }
      }
      return note
    })
    this.setState({ notes })
  }

  onDeleteHandler (id) {
    const notes = this.state.notes.filter(note => note.id !== id)
    this.setState({ notes })
  }

  render () {
    const filteredNotes = this.state.notes.filter(note => {
      if (this.state.query === '') {
        return this.state.notes
      } else {
        return note.title.toLowerCase().includes(this.state.query)
      }
    })
    return (
      <React.Fragment>
        <NotesHeader />
        <NotesSearch searchNote={this.onSearchNoteHandler} />
        <NotesInput addNote={this.onAddNoteHandler} />
        <NotesContainer notes={filteredNotes} archive={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
        <NotesFooter />
      </React.Fragment>
    )
  }
}

export default PersonalNotesApp
