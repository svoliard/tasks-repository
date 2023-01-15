let car = {
    make: "Honda",
    model: "Insight",
    year: 2009,
    start: function () {
        console.log("The car is starting.");
    },
    drive: function () {
        console.log("The car is driving.");
    },
    stop: function () {
        console.log("The car is stopped.");
    },
    honk: function () {
        console.log("Honk! Honk!.");
    }
};
car.start();
car.drive();
car.stop();
car.honk();