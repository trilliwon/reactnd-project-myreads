import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      })
  }

  onShowSearchPage = () => {
    this.setState(() => ({
      showSearchPage: true
    }))
  }

  onCloseSearchPage = () => {
    this.setState(() => ({
      showSearchPage: false
    }))
  }

  onChangeShelf = (book, shelf) => {
    const changedBook = this.state.books.find(({id}) => {
      return book.id === id;
    })
    console.log(changedBook, shelf);
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks onCloseSearchPage={this.onCloseSearchPage}></SearchBooks>
        ) : (
            <ListBooks books={this.state.books} onShowSearchPage={this.onShowSearchPage} onChangeShelf={this.onChangeShelf}></ListBooks>
          )}
      </div>
    )
  }
}

export default BooksApp
