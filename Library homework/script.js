"use strict";

class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  removeBook(title) {
    const index = this.books.findIndex((book) => book.title === title);
    if (index === -1) {
      return `book doesn't exist`;
    } else {
      this.books.splice(index, 1);
    }
  }
  findBookByTitle(title) {
    return this.books.find((book) => book.title === title) || null;
  }
  findBooksByAuthor(authorName) {
    return this.books.filter(
      (book) => book.author.toLowerCase() === authorName.toLowerCase(),
    );
  }
getAvailableBooks() {
  return this.books.filter((book) => book.isAvailable);
}
  borrowBook(title) {
    let found = this.books.find((book) => book.title === title);
    if (found) {
      return found.borrowBook();
    } else {
      return "book doesn't exist";
    }
  }
  returnBook(title) {
    let found = this.books.find((book) => book.title === title);
    if (found) {
      return found.returnBook();
    } else {
      return "book doesn't exist";
    }
  }
  countBooks() {
    return this.books.length;
  }
  countAvailableBooks() {
    return this.getAvailableBooks().length;
  }
  showAllBooks() {
    return this.books.map((b) => b.getInfo());
  }
  searchBooks(word) {
    return this.books.filter((b) => b.matchesTitle(word));
  }
  getOldestBook() {
    if (this.books.length === 0) {
      return null;
    }
    let oldest = this.books[0];
    for (let i = 1; i < this.books.length; i++) {
      if (oldest.year > this.books[i].year) {
        oldest = this.books[i];
      }
    }
    return oldest;
  }
}
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
  }
  getInfo() {
    return `Title of book: ${this.title},
    author of book: ${this.author},
    year of release: ${this.year},
    is available: ${this.isAvailable}`;
  }
  borrowBook() {
    if (this.isAvailable) {
      this.isAvailable = false;
    } else {
      return "book is already borrowed";
    }
  }
  returnBook() {
    if (!this.isAvailable) {
      this.isAvailable = true;
    } else {
      return "book is already availible";
    }
  }
  matchesAuthor(authorName) {
    return authorName.toLowerCase() === this.author.toLowerCase();
  }
  matchesTitle(word) {
    return this.title.toLowerCase().includes(word.toLowerCase());
  }
}

//given books
const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
//test
console.log("=== All books ===");
library.showAllBooks();

console.log("=== Count books ===");
console.log(library.countBooks()); // 4

console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); // 4

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
library.borrowBook("1984");

console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); // 3

console.log("=== Final books ===");
library.showAllBooks();
