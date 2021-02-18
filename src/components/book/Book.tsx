import React, { Component } from 'react';
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

var defaultBooks: Array<IBook> = [];

function Book() {
    let jsonBooks= BookService.getAllBooks;
    data =[];
    defaultBooks.push(jsonBooks.data);
    return (
        <div>
            <Switch>
                <Route path="/book" component={BookTable}></Route>
                <Route path="/add-book" component={AddBookForm}></Route>
                <Route path="/edit-book" component={EditBookForm}></Route>
            </Switch>
        </div>
    );
}

export default Book;