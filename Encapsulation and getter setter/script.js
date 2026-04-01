"use strict";
class Library {
  #name;
  #books;
  #readers;
  constructor(name) {
    this.name = name;
    this.#books = [];
    this.#readers = [];
  }
  get name() {
    return this.#name;
  }
  set name(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error("name must not be an empty string");
    }
    this.#name = value;
  }
  get books() {
    return this.#books;
  }
  get readers() {
    return this.#readers;
  }

  //methods
  addBook(book) {
    if (!(book instanceof Book)) {
      throw new Error("only book instances allowed");
    }
    this.#books.push(book);
  }
  registerReader(reader) {
    if (!(reader instanceof Reader)) {
      throw new Error("Only reader instances allowed");
    }
    this.#readers.push(reader);
  }
  findBookByTitle(title) {
    return (
      this.#books.find(
        (book) => book.title.toLowerCase() === title.toLowerCase(),
      ) || null
    );
  }
  findBooksByAuthor(author) {
    return this.#books.filter(
      (book) => book.author.toLowerCase() === author.toLowerCase(),
    );
  }
  giveBookToReader(title, reader) {
    const book = this.findBookByTitle(title);
    if (!book) {
      throw new Error("book doesn't exist");
    }
    if (!book.isAvailable) {
      throw new Error("book isn't available");
    }
    reader.takeBook(book);
  }
  acceptBookFromReader(title, reader) {
    const book = this.findBookByTitle(title);
    if (!book) {
      throw new Error("book doesn't exist");
    }
    reader.giveBackBook(book);
    return `book was returned`;
  }
  showAvailableBooks() {
    return this.#books.filter((b) => b.isAvailable);
  }
  showAllBooks() {
    return this.#books.map((b) => b.getInfo());
  }
  getLibraryInfo() {
    return `Central Library: ${this.#books.length} books, ${this.#readers.length} readers`;
  }
}
class Book {
  #title;
  #author;
  #year;
  #isAvailable;
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.#isAvailable = true;
  }
  //title
  get title() {
    return this.#title;
  }
  set title(value) {
    if (typeof value !== "string" || value.trim().length === 0)
      throw new Error("title must not be an empty string");
    this.#title = value;
  }
  //author
  get author() {
    return this.#author;
  }
  set author(value) {
    if (typeof value !== "string" || value.trim().length === 0)
      throw new Error("author must not be an empty string");
    this.#author = value;
  }
  //year
  get year() {
    return this.#year;
  }
  set year(value) {
    if (typeof value !== "number" || value <= 0)
      throw new Error("year must be a positive number");
    this.#year = value;
  }
  //isAvailible
  get isAvailable() {
    return this.#isAvailable;
  }

  //methods
  borrowBook() {
    if (!this.#isAvailable) {
      return `book is already borrowed`;
    }
    this.#isAvailable = false;
    return `book was borrowed`;
  }
  returnBook() {
    if (this.#isAvailable) {
      throw new Error("book is om library");
    }
    this.#isAvailable = true;
    return `book was returned`;
  }
  matchesTitle(word) {
    if (typeof word !== "string" || word.trim() === "") return false;
    return this.#title.toLowerCase().includes(word.toLowerCase());
  }
  getInfo() {
    return `book title: ${this.#title}, \n book author: ${this.#author}, \n realise year: ${this.#year}, \n is availbale: ${this.#isAvailable}`;
  }
}
class Reader {
  #name;
  #borrowedBooks;
  constructor(name) {
    this.name = name;
    this.#borrowedBooks = [];
  }
  //name
  get name() {
    return this.#name;
  }
  set name(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error("name must not be an empty string");
    }
    this.#name = value;
  }
  //borrowed Books
  get borrowedBooks() {
    return [...this.#borrowedBooks];
  }
  get borrowedBooksCount() {
    return this.#borrowedBooks.length;
  }

  //methods
  takeBook(book) {
    if (!book.isAvailable) {
      throw new Error("book is not available");
    }
    if (this.#borrowedBooks.includes(book)) {
      throw new Error("reader has this book");
    }
    book.borrowBook();
    this.#borrowedBooks.push(book);
  }
  giveBackBook(book) {
    // let index = this.#borrowedBooks.indexOf(book);
    // if(index === -1 ){
    //     throw new Error("this book wans't borrowed by reader");
    // }
    // book.returnBook();
    // this.#borrowedBooks.splice(index,1);
    if (!this.#borrowedBooks.includes(book)) {
      throw new Error("this book wans't borrowed by reader");
    }
    book.borrowBook();
    this.#borrowedBooks = this.#borrowedBooks.filter((b) => b !== book);
  }
  hasBook(book) {
    // return this.#borrowedBooks.includes(book);
    return this.#borrowedBooks.some((b) => b === book);
  }
  showBorrowedBook() {
    return this.#borrowedBooks.map((book) => book.title);
  }
  getInfo() {
    return `${this.#name} has ${this.borrowedBooksCount} borrowed books`;
  }
}

//already given
const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book3 = new Book("1984", "George Orwell", 1949);

const reader1 = new Reader("Anna");
const reader2 = new Reader("David");

const library = new Library("Central Library");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.registerReader(reader1);
library.registerReader(reader2);

//test

console.log("=== Library info ===");
console.log(library.getLibraryInfo());

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Available books ===");
console.log(library.showAvailableBooks());

console.log("=== Give book to reader ===");
library.giveBookToReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBook());
console.log(book1.getInfo());

console.log("=== Give another book to reader ===");
library.giveBookToReader("Harry Potter", reader1);
console.log(reader1.getInfo());

console.log("=== Try to borrow same book again ===");
library.giveBookToReader("The Hobbit", reader2);

console.log("=== Return book ===");
library.acceptBookFromReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBook());
console.log(book1.getInfo());

console.log("=== Final available books ===");
console.log(library.showAvailableBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());
