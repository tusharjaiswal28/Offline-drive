const library = {
  name: "Central City Library",
  location: "Downtown",
  books: [
    {
      title: "1984",
      author: "George Orwell",
      available: true
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      available: false
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      available: true
    }
  ],


  findBook(title) {
    return this.books.find(book => book.title === title);
  }
};


console.log("Available books:");
for (let book of library.books) {
  if (book.available) {
    console.log(`${book.title} by ${book.author}`);
  }
}


const foundBook = library.findBook("1984");
console.log("Found book:", foundBook);
