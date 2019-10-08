import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class Book extends Component {

    onSelectShelf = (shelf) => {
        this.props.onChangeShelf(this.props.book, shelf);
    }

    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then((result) => {
                console.log(result);
            })
    }

    render() {
        const { book } = this.props;

        const smallThumbnail = (book.imageLinks !== undefined && book.imageLinks.smallThumbnail !== undefined) ? book.imageLinks.smallThumbnail : ''

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(event) => this.onSelectShelf(event.target.value)}>
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