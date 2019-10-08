import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Books from './Books';

class SearchBooks extends Component {

    state = {
        books: [],
        query: '',
    }

    searchBooks = (query) => {
        this.setState({
            query: query
        }, () => {
            if (query === '') {
                this.setState(() => ({
                    books: [],
                }))
                return
            }

            BooksAPI.search(query)
                .then((books) => {

                    if (books === undefined || books.error !== undefined) {
                        return
                    }
                    this.setState(() => ({
                        books: books,
                    }))
                }).catch((error) => {
                    this.setState(() => ({
                        books: [],
                    }))
                })
        })
    }

    render() {
        const { books } = this.state

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <button className="close-search">Close</button>
                        <div className="search-books-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                value={this.state.query}
                                onChange={(event) => this.searchBooks(event.target.value)} />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>
                <Books books={books} ></Books>
            </div>
        );
    }
}

export default SearchBooks