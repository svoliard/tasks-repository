class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }
    accelerate() {
        this.speed += 10;
    }
    brake() {
        this.speed -= 7;
    }
    currentSpeed() {
        return this.speed;
    }
};

let myCar = new Car("Honda", "Insight", 2009);
console.log(myCar.currentSpeed());
myCar.accelerate();
myCar.accelerate();
myCar.brake();