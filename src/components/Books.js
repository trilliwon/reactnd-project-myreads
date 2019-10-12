import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'

const Books = (props) => {

    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {props.books.map((book) => (
                    <li key={book.id}>
                        <Book book={book} onChangeShelf={props.onChangeShelf}></Book>
                    </li>
                ))}
            </ol>
        </div>
    );
}


Books.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func
}


export default Books