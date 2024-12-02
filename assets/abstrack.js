'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('\n'));
    main();    
});
function readLine() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Do not attempt to directly instantiate an abstract class.'); 
        }
        else {
            this.title = title;
            this.author = author;
        }
    }
    
    display() {
        console.log('Implement the \'display\' method!')
    }
}

// Declare your class here.
class MyBook extends Book {
    /**
     * Class Constructor
     * 
     * @param {string} title - The book's title.
     * @param {string} author - The book's author.
     * @param {number} price - The book's price.
     */
    constructor(title, author, price) {
        super(title, author); // Call the parent class constructor
        this.price = price;
    }

    /**
     * Method Name: display
     * 
     * Print the title, author, and price in the specified format.
     */
    display() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price: ${this.price}`);
    }
}

// End class
function main() {
    let title = readLine()
    let author = readLine()
    let price = +readLine()

    let book = new MyBook(title, author, price)
    book.display()
}
