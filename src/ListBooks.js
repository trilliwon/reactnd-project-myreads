import React, { Component } from 'react'
import BookShelf from './BookShelf'

class ListBooks extends Component {

    shelves = [
        { 'id': 'currentlyReading', 'title': 'Currently Reading' },
        { 'id': 'wantToRead', 'title': 'Want to Read' },
        { 'id': 'read', 'title': 'Read' },
    ];

    render() {
        const { books, onShowSearchPage, onChangeShelf } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.shelves.map((shelf) => (
                            <BookShelf key={shelf.id} books={books} shelf={shelf} onChangeShelf={onChangeShelf}></BookShelf>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={onShowSearchPage}>Add a book</button>
                </div>
            </div>

        );
    }
}

export default ListBooks;