(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        "firstname" : "Rick",
        "lastname" : "Sanchez"
    };

    console.log(person.firstname);
    console.log(person.lastname);
    console.log("-----------------");


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello= function () {
        return "Hello from " + person.firstname + " " + person.lastname + " \"wubba lubba dub dub\" *burp*";
    };

    console.log(person.sayHello());
    console.log("-----------------");


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    shoppers.forEach(function(element, index) {
        if(shoppers[index].amount >= 200){
            console.log(shoppers[index].name + " your total is $" + shoppers[index].amount + " ,but you qualify for a 12% discount. " +
                "So your new total is $" + (shoppers[index].amount - (shoppers[index].amount * .12)));
        } else {
            console.log(shoppers[index].name +  " you did not receive a discount. Your total is $" + shoppers[index].amount + "!")
        }
    });
    console.log("-----------------");


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books =
        [{
        author:{
            "firstname" : "F. Scott",
            "lastname" : "Fitzgrald"
        },
            "title" : "The Great Gatsby"
        },{
        author:{
            "firstname" : "Harper",
            "lastname" : "Lee"
        },
            "title" : "To Kill a Mockingbird "
        },{
        author:{
            "firstname" : "J.K.",
            "lastname" : "Rowling"
        },
            "title" : "Harry Potter"
        },{
        author:{
            "firstname" : "Jane",
            "lastname" : "Austen"
        },
            "title" : "Pride and Prejudice"
        },{
        author:{
            "firstname" : "Arthur C.",
            "lastname" : "Clarke"
        },
            "title" : "2001: A Space Odyssey"
    }];

    console.log(books[0].title);
    console.log(books[0].author.firstname);
    console.log(books[0].author.lastname);
    console.log("-----------------");


    console.log(books[1].title);
    console.log(books[1].author.firstname);
    console.log(books[1].author.lastname);
    console.log("-----------------");


    console.log(books[2].title);
    console.log(books[2].author.firstname);
    console.log(books[2].author.lastname);
    console.log("-----------------");


    console.log(books[3].title);
    console.log(books[3].author.firstname);
    console.log(books[3].author.lastname);
    console.log("-----------------");


    console.log(books[4].title);
    console.log(books[4].author.firstname);
    console.log(books[4].author.lastname);
    console.log("-----------------");


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    books.forEach(function (element, index, array) {
        console.log("Book # " + (index + 1));
        console.log("Title: " + books[index].title);
        console.log("Author: " + books[index].author.firstname + " " + books[index].author.lastname)
        console.log("-----------------");
    });




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();