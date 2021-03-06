import React, { Component } from 'react'
import * as BooksAPI from '../api/BooksAPI'
import Books from './Books';

class SearchBooks extends Component {

    state = {
        books: [],
        query: '',
    }

    debounce = (func, delay) => {
        let inDebounce
        return function () {
            const context = this
            const args = arguments
            clearTimeout(inDebounce)
            inDebounce = setTimeout(() => func.apply(context, args), delay)
        }
    }

    searchBooks = (query) => {
        BooksAPI.search(query)
            .then((books) => {

                if (books === undefined || books.error !== undefined) {
                    this.setState(() => ({
                        books: [],
                    }))

                    return
                }

                this.setState(() => ({
                    books: this.mapMyBooks(books),
                }))
            }).catch((error) => {
                this.setState(() => ({
                    books: [],
                }))
            })
    }

    mapMyBooks = (searchedBooks) => {
        return searchedBooks.map((book) => {
            let mybook = this.props.mybooks.find((element) => book.id === element.id)
            return mybook === undefined ? book : mybook
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.props.onCloseSearchPage) {
            this.props.onCloseSearchPage()
        }
    }

    handleQueryInput = (event) => {
        event.preventDefault()
        const query = event.target.value

        this.setState({
            query: query
        }, () => {
            if (query === '') {
                this.setState(() => ({
                    books: [],
                }))
                return
            }
            this.debouncedSearch(query.trim())
        })
    }

    debouncedSearch = this.debounce(this.searchBooks, 500)

    render() {

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <button className="close-search" onClick={this.handleSubmit}>Close</button>
                        <div className="search-books-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                value={this.state.query}
                                onChange={this.handleQueryInput} />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>
                <Books books={this.state.books} ></Books>
            </div>
        );
    }
}

export default SearchBooks