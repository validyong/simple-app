import BookService from './BookService'

it('fetch all books', () => {
    let books = BookService.getAllBooks;
    console.log(books);
    for (let i = 0; i < books.length; i++) {
    }
})