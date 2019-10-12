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

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## License

A Project [starter code](https://github.com/udacity/reactnd-project-myreads-starter) contributed by Udacity.