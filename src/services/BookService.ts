import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:8080/book";

class BookService {
    getAllBooks() {
        return axios.get(BOOK_API_BASE_URL);
    }

    getBookByIsbn(isbn: string) {
        return axios.get(BOOK_API_BASE_URL + '/' + isbn)
    }

    createBook(book: JSON) {
        return axios.post(BOOK_API_BASE_URL, book);
    }

    updateBook(book: JSON, isbn: string) {
        return axios.put(BOOK_API_BASE_URL + '/' + isbn, book);
    }

    deleteBook(isbn: string) {
        return axios.delete(BOOK_API_BASE_URL + '/' + isbn);
    }
}

export default new BookService();
