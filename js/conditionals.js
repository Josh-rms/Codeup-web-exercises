(function () {
    "use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var con = confirm("Would you like to enter a number?");
if(con === true) {
    var num = prompt("Alright enter a number.");
    if (isNaN(num)) {
        alert("What you entered is not a number.");
    } else {
        if (+num % 2 === 0) {
            alert("This number is even!");
        } else {
            alert("This number is odd!")
        }
        var plus = (+num + 100);
        alert(num + " + 100= " + plus);

        if (+num >= 0) {
            alert("This number is positive!");
        } else {
            alert("This number is negative!");
        }
    }
}


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(color) {
    if (color === "red") {
        return ("Strawberries are red.")
    }
    if (color === "orange") {
        return ("The orange is orange")
    }
    if (color === "yellow"){
        return ("The banana is yellow")
    }
    if (color === "green") {
        return ("The grass is green")
    }
    if (color === "blue"){
        return ("The sky is blue")
    }
    if (color === "indigo") {
        return ("Indigo is indigo, I don't really know anything that's that color")
    }
    if (color === "violet"){
        return ("Violet is violet, I don't know anything about this color either")
    }
}


/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */


console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

switch (randomColor) {
    case "red" : console.log("Strawberries are red.");
    break;
    case "orange" : console.log("The orange is orange");
    break;
    case "yellow" : console.log("The banana is yellow");
    break;
    case "green" : console.log("The grass is green");
    break;
    case "blue" : console.log("The sky is blue");
    break;
    case "indigo" : console.log("Indigo is indigo, I don't really know anything that's that color");
    break;
    case "violet" : console.log("Violet is violet, I don't know anything about this color either");
    break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("What color do you want?");
var userInput = analyzeColor(userColor);
alert(userInput);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(a,b) {
    switch(a) {
        case 0 : return 0;
        case 1 : return +b - (.1 * +b);
        case 2 : return +b - (.25 * +b);
        case 3 : return +b - (.35 * +b);
        case 4 : return +b - (.5 * +b);
        case 5 : return 0;
        default : return +b
    }
}


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = prompt("How much was your total bill?");

var discountedTotal = calculateTotal(luckyNumber, totalBill);

alert("Your lucky number is " + luckyNumber + "! " + "Your original bill was $" + totalBill
    + "! " + "Your discounted price is $" + discountedTotal + "!");

})();