import React, { Component } from 'react';
import PropTypes from 'prop-types'
import * as BooksAPI from '../api/BooksAPI'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onChangeShelf: PropTypes.func
    }

    state = {
        book: this.props.book,
    }

    onChangeShelf = (shelf) => {
        BooksAPI.update(this.state.book, shelf)
            .then((res) => {
                return BooksAPI.get(this.state.book.id)
            }).then((book) => {
                this.setState(() => ({
                    book: book
                }))

                if (this.props.onChangeShelf) {
                    this.props.onChangeShelf();
                }
            })
    }

    render() {
        const { book } = this.state
        const shelf = book.shelf === undefined ? 'none' : book.shelf

        const smallThumbnail = (book.imageLinks !== undefined && book.imageLinks.smallThumbnail !== undefined) ? book.imageLinks.smallThumbnail : ''

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={(event) => this.onChangeShelf(event.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        );
    }
}

export default Book;