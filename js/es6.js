/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
//  "DONE!"
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
//  "DONE!"
// declared as `const`
const name = "Josh";
const email = "josh.r.ramos1@gmail.com";
const languages = ["HTMl", "CSS", "JavaScript"];

// TODO: rewrite the object literal using object property shorthand
//  "DONE!"
users.push({
  name,
  email,
  languages
});

// TODO: replace `var` with `let` in the following variable declarations
//  "DONE!"
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
//  "DONE!"

users.forEach(user => emails.push(user.email));
users.forEach(user => names.push(user.name));

// TODO: replace `var` with `let` in the following declaration
//  "DONE!"
let developers = [];
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  //       "DONE!"
  const {name, email, languages} = user;

  // TODO: rewrite the assignment below to use template strings
  //  "DONE!"
  developers.push(`${name}'s email is ${email}, ${name} know ${languages.join(", ")}`);
});

// TODO: Use `let` for the following variable
//  "DONE!"
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
//  "DONE!"

for (let developer of developers) {

  // TODO: rewrite the assignment below to use template strings
  //  "DONE!"
list += (`<li>${developer}</li>`);
}
list += "</ul>";