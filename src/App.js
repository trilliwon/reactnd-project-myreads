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

  onChangeShelf = (book, shelf) => {
    const changedBook = this.state.books.find(({ id }) => {
      return book.id === id;
    })
    console.log(changedBook, shelf);
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={(history) => (
          <ListBooks
            books={this.state.books}
            onChangeShelf={this.onChangeShelf}>
          </ListBooks>
        )} />
        <Route path="/search" render={({ history }) => (
          <SearchBooks onCloseSearchPage={() => (
            history.push('/')
          )}></SearchBooks>
        )} />
      </div>
    )
  }
}

export default BooksApp
