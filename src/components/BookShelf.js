import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Books from './Books.js';

class BookShelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        shelf: PropTypes.object.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    render() {

        const { books, shelf, onChangeShelf } = this.props;
        const filteredBooks = books.filter((book) => book.shelf === shelf.id)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <Books books={filteredBooks} onChangeShelf={onChangeShelf} ></Books>
            </div>
        );
    }
}

export default BookShelf;