(function () {
    "use strict";

    function showMultiplicationTable(num) {
        for (num = 1; num <= 10; num++) {
            console.log("7 x " + num + " = " + (num * 7));
        }
    }

    showMultiplicationTable(1);


    for (var i = 1; i <= 10; i += 1) {
        var RandomNum = Math.floor(Math.random() * 180) + 20;
        if (RandomNum % 2 === 0){
            console.log(RandomNum + " is even!");
        } else {
            console.log(RandomNum + " is odd!");
        }
    }

    for (var y = 1; y < 10; y++){
        console.log(String(y).repeat(y));

    }

    for (var z = 100; z >= 5; z -= 5){
            console.log(z)

    }
})();