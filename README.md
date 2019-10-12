# MyReads Project

This is the project for Udacity's React Nanodegree. As a user, you can select books to categorize and search books to add to your bookshelf. There are three category such as **Currently Reading**, **Want to Read** and **Read**. This project built by using [ReactJS](https://reactjs.org), [React Router](https://reacttraining.com/react-router) and Udacity Books API.

## Getting Started

* clone project `git clone https://github.com/trilliwon/reactnd-project-myreads.git`
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Demo

* You can check demo here: [https://myreads-react-nd.firebaseapp.com](https://myreads-react-nd.firebaseapp.com)

### Built With

* [ReactJS](https://reactjs.org)
* [React Router](https://reacttraining.com/react-router)
* Udacity Books API

## Functionalities

* Main page is showing categorized bookshelf
    * Currently Reading
    * Want to Read
    * Read
* Clicking the plus(+) button at bottom right, user can search books and select to add to your bookshelf
    * Available **debounced search** that delays user input for 500ms

## File Structure
```bash
src
├── App.css
├── App.js
├── App.test.js
├── api
│   └── BooksAPI.js
├── components
│   ├── Book.js
│   ├── BookShelf.js
│   ├── Books.js
│   ├── ListBooks.js
│   └── SearchBooks.js
├── icons
│   ├── add.svg
│   ├── arrow-back.svg
│   └── arrow-drop-down.svg
├── index.css
└── index.js
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## License

A Project [starter code](https://github.com/udacity/reactnd-project-myreads-starter) contributed by Udacity.