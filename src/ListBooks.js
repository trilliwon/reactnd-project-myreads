import React, { Component } from 'react'
import BookShelf from './BookShelf'

class ListBooks extends Component {
    render() {
        const { shelves, books } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map((shelf) => (
                            <BookShelf key={shelf.id} books={books} shelf={shelf}></BookShelf>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            </div>

        );
    }
}

export default ListBooks;