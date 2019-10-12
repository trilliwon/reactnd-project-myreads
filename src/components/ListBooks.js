import React, { Component } from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ListBooks extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    shelves = [
        { 'id': 'currentlyReading', 'title': 'Currently Reading' },
        { 'id': 'wantToRead', 'title': 'Want to Read' },
        { 'id': 'read', 'title': 'Read' },
    ];

    onShowSearchPage = (e) => {
        e.preventDefault()
        if (this.props.onShowSearchPage) {
            this.props.onShowSearchPage()
        }
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.shelves.map((shelf) => (
                            <BookShelf
                                key={shelf.id}
                                books={this.props.books}
                                shelf={shelf}
                                onChangeShelf={this.props.onChangeShelf}>
                            </BookShelf>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search" className='add-contact'>
                        Add Contact
                    </Link>
                </div>
            </div>

        );
    }
}

export default ListBooks;