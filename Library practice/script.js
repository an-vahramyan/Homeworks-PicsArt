"use strict";
function Book(id, title, author, year) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.year = year;
  this.isAvailable = true;
}
function Library(name, books) {
  this.name = name;
  this.books = books || [];
}

Library.prototype.addBook = function (book) {
  if (book.id === undefined) {
    throw new Error("Don't add a book without ID");
  }
  if (!book.title) {
    throw new Error("Don't add a book without title");
  }
  if (!book.author) {
    throw new Error("Don't add a book without author");
  }
  if (typeof book.year !== "number") {
    throw new Error("Year must be a number");
  }
  let id = book.id;
  let books = this.books;
  let unique = books.some((e) => e.id === id);
  if (unique) {
    throw new Error("ID must be unique");
  }
  if (!(book instanceof Book)) {
    throw new Error("Only Book instances allowed");
  }
  this.books.push(book);
};

let library = new Library("my library");
library.addBook(new Book(100, "It", "Stephen King", 1986));
library.addBook(new Book(102, "Divine Comedy", "Dante Alighieri", 1308));
library.addBook(
  new Book(103, "Murder on the orient express", "Agatha Christie", 1934),
);
library.addBook(new Book(104, "Misery", "Stephen King", 1987));
library.addBook(new Book(105, "The little Prince", "Antoine De Saint", 1943));
library.addBook(new Book(106, "Crooked house", "Agatha Christie", 1949));
// let book1 = new Book();
// let book2 = new Book();
// let book3 = new Book();
// library.addBook(book1);
console.log(library.books);
Library.prototype.removeBook = function (id) {
  if (id === undefined) {
    throw new Error("Id is required");
  }
  let index = this.books.findIndex((book) => book.id === id);
  if (index === -1) {
    throw new Error("book doesn't exist");
  }
  this.books.splice(index, 1);
};
// library.removeBook(100);
// library.removeBook(111);
// console.log(library.books);
Library.prototype.borrowBook = function (id) {
  let index = this.books.findIndex((book) => book.id === id);
  if (index === -1) {
    throw new Error("Book doesn't exist");
  }
  let book = this.books[index];
  if (book.isAvailable) {
    book.isAvailable = false;
  } else {
    throw new Error("book is already borrowed");
  }
};
// library.borrowBook(100);
// library.borrowBook(111);
// console.log(library.books);
Library.prototype.returnBook = function (id) {
  let index = this.books.findIndex((book) => book.id === id);
  if (index === -1) {
    throw new Error("book doesn't exist");
  }
  let book = this.books[index];
  if (book.isAvailable) {
    throw new Error("Book is already available");
  }
  book.isAvailable = true;
};
Library.prototype.findBookByTitle = function (title) {
  let found = this.books.find((book) => book.title === title);
  if (found) {
    return found;
  } else {
    throw new Error("title don't found");
  }
};
// console.log(library.findBookByTitle("It"));
Library.prototype.findBookByAuthor = function (author) {
  let found = this.books.filter((book) => book.author === author);
  if (found) {
    return found;
  } else {
    throw new Error("Author don't found");
  }
};
Library.prototype.listAvailableBooks = function () {
  return this.books.filter((book) => book.isAvailable);
};
Library.prototype.listBorrowedBooks = function () {
  return this.books.filter((book) => !book.isAvailable);
};
Library.prototype.showLibraryInfo = function () {
  return {
    library_name: this.name,
    number_of_books: this.books.length,
    available_books: this.books.filter((book) => book.isAvailable).length,
    borrowed_books: this.books.filter((book) => !book.isAvailable).length,
  };
};
console.log(library.showLibraryInfo());
