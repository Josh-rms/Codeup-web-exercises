(function () {
    "use strict";

    var i = 2;
    while(i <= 65536) {
        console.log(i);
        i = i * 2;
    }

// This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
    var randomCone = Math.floor(Math.random() * 5) + 1;

    do {
        console.log(allCones + " cones left");
        console.log(randomCone + " cones sold");
        allCones = allCones - randomCone;
        if (randomCone > allCones && (randomCone + allCones) > 0) {
            console.log("Cannot sell you " + randomCone + " cones. I only have " + (allCones + randomCone));
        }
    } while (allCones >= 0); {
        console.log("Yay! I sold them all!");

    }
})();