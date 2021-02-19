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

import { IBook } from './interface';
import BookService from '../../services/BookService';

interface IProps {
    books: Array<IBook>;
    onEdit: (book: IBook) => void;
    onDelete: (book: IBook) => void;
}

const reloadBookList = () => {
    BookService.getAllBooks().then((response) => {

    })
}

const BookTable: React.FunctionComponent<IProps> = props => {
    console.log('BookTable.tsx');
    console.log(props.books.length);
    return (
        <div>
            <Typography variant="h4" >User Details</Typography>
            <Table>
                <TableHead>
                    <TableCell>ISBN</TableCell>
                    <TableCell>Book Name</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Genre Code</TableCell>
                </TableHead>
                <TableBody>
                    {props.books.length > 0 ? (
                        props.books.map(i => (
                            <TableRow key={i["isbn"]}>
                                <TableCell>{i["isbn"]}</TableCell>
                                <TableCell>{i["bookName"]}</TableCell>
                                <TableCell>{i["compnay"]}</TableCell>
                                <TableCell>{i["price"]}</TableCell>
                                <TableCell>{i["genreCode"]}</TableCell>
                                <TableCell onClick={() => props.onEdit(i)}><CreateIcon /></TableCell>
                                <TableCell onClick={() => props.onDelete(i)}><DeleteIcon /></TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell>no books</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>


        </div>
    )

}

export default BookTable;