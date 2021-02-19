export interface IBook {
    isbn: string;
    bookName: string;
    compnay: string;
    price: number;
    genreCode: number;
}

export interface IBookResponse {
    data: IBook
}