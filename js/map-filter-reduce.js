const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLang = users.filter(users => users.languages.length >= 3);
console.log(threeLang);

let userEmail = users.map(users => users.email);
console.log(userEmail);

let numOfYears = users.reduce((accumulation, person) => {
    return accumulation + person.yearsOfExperience;
}, 0);
console.log(numOfYears/users.length);

let longestEmail = users.reduce((accumulation, person) => {
    if (person.email.length > accumulation.length) {
        accumulation = person.email;
    }
    return accumulation
}, "");
console.log(longestEmail);

let singleStringNames = users.reduce((accumulation, person) => {
    if (person.id === users.length) {
        return accumulation + person.name + ".";
    } else {
        return accumulation + person.name + ", ";
    }
}, "Your instructors are: ");
console.log(singleStringNames);