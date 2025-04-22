// You need to implement the Library constructor function and its prototype methods

function Library() {
    this.books = [];
}
Library.prototype.addBook = function(book) {
    this.books.push(book);
}
Library.prototype.findBook = function(title) {
    if(this.books.includes(title)) {
        return "Book found"
    }
    return "Book not found"
}

