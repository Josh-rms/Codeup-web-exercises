(function () {
    "use strict";

    var userNumber = prompt("Enter an odd number between 1-50!");

    for (var i = 1; i <= 50; i += 2){
        if (userNumber % 2 === 0 || userNumber > 50 || userNumber < 0){
            userNumber = prompt("Please enter an ODD number between 1-50!");
        } else if (i === parseFloat(userNumber)) {
            console.log("Yikes! Skipping number: " + userNumber + "!");
        }
            console.log("Here is an odd number: " + i);
    }
})();