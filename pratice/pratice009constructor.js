// Base constructor.

function Car(make, model, transmission) {

    this.make = make;
    this.model = model;
    this.transmission = transmission;
    this.reportStars = function () {
        return ("Make: " + this.make + " Model: " + model);
    }
}

function SUV(make, model, transmission, mpg) {

    this.mpg = mpg;
    this.carInfo = Car;
    this.carInfo(make, model, transmission);
}

SUV.prototype = new Car();

SUV.prototype.getMPG = function () {

    return " The SUV mpg is " + this.mpg;

}

mySUV = new SUV("Kia", "Sportage", "manual", 32);

myCar = new Car("VW", "Jetta", "automatic");

document.writeln(mySUV.reportStars());

document.writeln(myCar.getMPG());
