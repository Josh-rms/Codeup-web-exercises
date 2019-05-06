/* This was my first attempt that also works. It's just hard coded and doesnt take any other number.

// function wait() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//                 resolve(console.log("You\'ll see this after 1 second"));
//         }, 1000);
//         setTimeout(() => {
//                 resolve(console.log("You\'ll see this after 3 seconds"));
//         }, 3000);
//     });
// }
// console.log(wait());

// wait(1000).then(() => console.log("You\'ll see this after 1 second"));
// wait(3000).then(() => console.log("You\'ll see this after 3 seconds"));

 */


const wait = (number) => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve()
        }, number);
    });
};

wait(1000).then(() => console.log("You\'ll see this after 1 second"));
wait(3000).then(() => console.log("You\'ll see this after 3 seconds"));