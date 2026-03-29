"use strict";
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (!(book instanceof Book)) {
      throw new Error("Only book instances aloved");
    }

    if (book.id === undefined) {
      throw new Error("Don't add a book without id");
    }
    if (!book.title) {
      throw new Error("Don't add a book without title");
    }
    if (!book.author) {
      throw new Error("Don't add a book without author");
    }
    if (typeof book.year !== "number") {
      throw new Error("Year must be number");
    }
    let id = book.id;
    let books = this.books;
    let unique = books.some((e) => e.id === id);
    if (unique) {
      throw new Error("Id must be unique");
    }

    this.books.push(book);
  }
  removeBook(id) {
    if (id === undefined) {
      throw new Error("id is reuiered");
    }
    let index = this.books.findIndex((book) => book.id === id);
    if (index === -1) {
      throw new Error("book doesn't exist");
    }
    this.books.splice(index, 1);
  }
  borrowBook(id) {
    let index = this.books.findIndex((book) => book.id === id);
    if (index === -1) {
      throw new Error("book doesn't exist");
    }
    let book = this.books[index];
    if (book.isAvailable) {
      book.isAvailable = false;
    } else {
      throw new Error("book already borrowed");
    }
  }
  returnBook(id) {
    let index = this.books.findIndex((book) => book.id === id);
    if (index === -1) {
      throw new Error("book doesn't exist");
    }
    let book = this.books[index];
    if (book.isAvailable) {
      throw new Error("book is available");
    } else {
      book.isAvailable = true;
    }
  }
  findBookByTitle(title) {
    const found = this.books.find((book) => book.title === title);
    if (found) {
      return found;
    } else {
      throw new Error("title don't found");
    }
  }
  findBookByAuthor(author) {
    const found = this.books.filter((book) => book.author === author);
    if (found) {
      return found;
    } else {
      throw new Error("author don't found");
    }
  }
  listAvailableBooks() {
    return this.books.filter((book) => book.isAvailable);
  }
  listBorrowedBooks() {
    return this.books.filter((book) => !book.isAvailable);
  }
  showLibraryInfo() {
    return {
      library_name: this.name,
      number_of_books: this.books.length,
      available_books: this.books.filter((book) => book.isAvailable).length,
      borrowed_books: this.books.filter((book) => !book.isAvailable).length,
    };
  }
}
class Book {
  constructor(id, title, author, year) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
  }
}

const myLibrary = new Library("my library");
const book1 = new Book(100, "It", "Stephen King", 1986);
const book2 = new Book(102, "Divine Comedy", "Dante Alighieri", 1308);
const book3 = new Book(
  103,
  "Murder on the orient express",
  "Agatha Christie",
  1934,
);
const book4 = new Book(104, "Misery", "Stephen King", 1987);
const book5 = new Book(105, "The little Prince", "Antoine De Saint", 1943);
const book6 = new Book(106, "Crooked house", "Agatha Christie", 1949);
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.addBook(book5);
myLibrary.addBook(book6);
console.log(myLibrary.books);
