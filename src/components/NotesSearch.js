import React from 'react'

class NotesSearch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }

    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onSearchChangeEventHandler (event) {
    this.setState(prevState => {
      return {
        ...prevState,
        title: event.target.value
      }
    })
    this.props.searchNote({ title: event.target.value })
  }

  onSubmitEventHandler (event) {
    event.preventDefault()
    this.props.searchNote(this.state)
  }

  render () {
    return (
      <div className="notes-app__search flex p-3 shadow-md sticky top-0 bg-white/30 backdrop-blur-sm">
        <input className="basis-4/5 border-2 border-[#564c58] rounded-lg px-1 bg-white/70 backdrop-blur-sm" type="search" placeholder="Cari Catatan..." value={this.state.title} onChange={this.onSearchChangeEventHandler}/>
        <button className="basis-1/5 backdrop-blur-sm bg-[#564c58]/90 hover:bg-[#7f7e80] rounded-lg ml-3 shadow-button" type="submit" value={this.state.title} onClick={this.onSubmitEventHandler}>
          <img className="h-10 mx-auto py-1" src="/images/search.svg" alt="Cari"/>
        </button>
      </div>
    )
  }
}

export default NotesSearch
