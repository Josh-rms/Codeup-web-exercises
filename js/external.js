console.log("Hello from external Javascript");

alert("Welcome to my Website.");

var userresponse = prompt("What is your favorite color?");

alert("Great, " + userresponse + " is my favorite color too!");




var littlemermaid = prompt("How many Little Mermaid movies?");
var brotherbear = prompt("How many Brother Bear movies?");
var hercules = prompt("How many Hercules movies?");

littlemermaid = Number(littlemermaid);
brotherbear = Number(brotherbear);
hercules = Number(hercules);

var price = (littlemermaid + brotherbear + hercules) * 3;
console.log("The price for all 3 movies is " + "$" + price);
alert("The price for all 3 movies is " + "$" + price);




var Google = prompt("How much did you make from Google?");
var Amazon = prompt("How much did you make from Amazon?");
var Facebook = prompt("How much did you make from Facebook?");

Google = Number(Google);
Amazon = Number(Amazon);
Facebook = Number(Facebook);

var G = Google * 6;
var A = Amazon * 4;
var F = Facebook * 10;

var week = "This Weeks Paycheck = " + "$" + (G + A + F);
var breakdown = "Breakdown: " + "Google= "+ "$" + G + " Amazon= " + "$" + A + " Facebook= " + "$" + F;
console.log(week);
console.log(breakdown);
alert(week);




 var classroom = confirm("Is the classroom full?");
 var schedule = confirm("Does your schedule conflict?");
 if (classroom && schedule === true) {
    alert("You're good to go to class!");
 } else{
     alert("Sorry that class is not available at this time!");
}



var offerStatus = true;
var numberOfItems = Number(prompt("How many did they buy?"));
console.log(numberOfItems);
var memberStatus= true;

if(memberStatus && offerStatus || (numberOfItems >2 && offerStatus)) {
    console.log("You can use the offer!");
    alert("You can use the offer");
} else {
    console.log("Sorry it's expired!");
    alert("Sorry the offer is expired");
}
