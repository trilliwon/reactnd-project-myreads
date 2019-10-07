import React, { Component } from 'react';
import Book from './Book.js'

class BookShelf extends Component {
    render() {

        const { books, shelf } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter((book) => book.shelf === shelf.id).map((book) => (
                            <li key={book.id}>
                                <Book book={book}></Book>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;