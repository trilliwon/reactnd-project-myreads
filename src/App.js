import React from 'react'
import * as BooksAPI from './api/BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.initializeState()
  }

  initializeState = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            onChangeShelf={this.initializeState}>
          </ListBooks>
        )} />
        <Route path="/search" render={({ history }) => (
          <SearchBooks mybooks={this.state.books} onCloseSearchPage={() => {
            this.initializeState()
            history.push('/')
          }}></SearchBooks>
        )} />
      </div>
    )
  }
}

export default BooksApp
