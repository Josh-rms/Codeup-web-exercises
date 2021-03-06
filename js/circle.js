(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // hint: area = pi * radius^2
            return (Math.PI * Math.pow(this.radius,2));
        },

        logInfo: function (doRounding) {
            var theArea = this.getArea();
            if (doRounding) {
                theArea = Math.round(theArea);
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " + theArea);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
