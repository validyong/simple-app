import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import BookService from '../../services/BookService';
import { IBook } from './interface';

interface IProps {
    onAddBook: (book: IBook) => void;
}

const initBook = { isbn: "", bookName: "", company: "", price: 0, genreCode: 0 };
const AddBookForm: React.FunctionComponent<IProps> = props => {
    const [formValue, setFormValue] = useState(initBook);
    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const rules = [
            { key: "isbn", required: true, label: "ISBN" },
            { key: "bookName", required: true, label: "Book Name" },
            { key: "company", required: true, label: "Company" },
            { key: "price", required: true, label: "price" },
            { key: "genreCode", required: true, label: "Genre Code" }
        ];

    };
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };
    return (
        <div>
            <form style={formContainer} className="form-edit" onSubmit={onFormSubmit}>
                <Typography variant="h4">Add User</Typography>

                <TextField type="text" name="isbn" value={formValue.isbn} placeholder="ISBN" onChange={onInputChange} fullWidth margin="normal" />
                <TextField type="text" name="bookName" value={formValue.bookName} placeholder="Book Name" onChange={onInputChange} fullWidth margin="normal" />
                <TextField type="text" name="company" value={formValue.company} placeholder="Company" onChange={onInputChange} fullWidth margin="normal" />
                <TextField type="number" name="price" value={formValue.price} placeholder="Price" onChange={onInputChange} fullWidth margin="normal" />
                <TextField type="number" name="genreCode" value={formValue.genreCode} placeholder="Genre Code" onChange={onInputChange} fullWidth margin="normal" />

                <Button variant="contained" color="primary">Add</Button>
            </form>
        </div>
    );
};


const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};
export default AddBookForm;