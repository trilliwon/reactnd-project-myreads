import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'

class Books extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    render() {
        const { books, onChangeShelf } = this.props;

        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <li key={book.id}>
                            <Book book={book} onChangeShelf={onChangeShelf}></Book>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default Books