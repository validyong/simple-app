import React, { useState, Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

import BookTable from './BookTable';
import AddBookForm from './AddBookForm';
import EditBookForm from './EditBookForm';

import { Route, Switch, BrowserRouter } from 'react-router-dom';


import { IBook } from "./interface";
import BookService from '../../services/BookService';

var jsonBooks: []; 
var defaultBooks: Array<IBook> = [];

function fetchBooks() {
    BookService.getAllBooks().then(response => {
        console.log(response.data);
        console.log('response.data.length: ' + response.data.length);
        for (let i = 0; i< response.data.length; i++) {
            // var singleBook: IBook ;
            // singleBook.isbn = response.data[i].isbn;
            // console.log(response.data[i]);
            defaultBooks.push(response.data[i]);
            console.log(defaultBooks[i].isbn)
        }
    });
    console.log(jsonBooks);
}

function Book() {
    
    fetchBooks();

    const initCurrentBook: IBook = { isbn: "", bookName: "", compnay: "", price: 0, genreCode: 0 }
    const [books, setBooks] = useState(defaultBooks);
    const [editBook, setEditBook] = useState(initCurrentBook);
    const [editing, setEdit] = useState(false);
    const onAddBook = (newBook: IBook) => {
    }

    const onCurrentBook = (book: IBook) => {
        setEditBook(book);
        setEdit(true);
    }
    const onUpdateBook = (isbn: string, newBook: IBook) => {
    }

    const onDeleteBook = (currentBook: IBook) => {
        setBooks(books.filter(i => i.isbn !== currentBook.isbn));
    }
    // data =[];
    // defaultBooks.push(jsonBooks.data);

    return (
        <div>
            <Switch>
                <Route path="/book" component={() => <BookTable books={defaultBooks} onEdit={onCurrentBook} onDelete={onDeleteBook} />}></Route>
                <Route path="/add-book" component={() => <AddBookForm onAddBook={onAddBook}/>}></Route>
                <Route path="/edit-book" component={() => <EditBookForm/>}></Route>
            </Switch>
        </div>
    );
}

export default Book;