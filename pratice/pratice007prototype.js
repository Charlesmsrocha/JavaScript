function Car(model, numCylinders, horsepower) {
    this.model = model;
    this.numCylinders = numCylinders;
    this.horsepower = horsepower;
}

//use prototyping to add a property
Car.prototype.color = "red";

//use prototyping to add a method
Car.prototype.reportInfo = function () {

    document.write("This model is the " + this.model +
                   " which has a " + this.numCylinders +
                   "-cylinder engine and" +
                   this.horsepower + " bhp "+
                   " and the color is " + this.color
                   );
}

var Honda = new Car("CRV", "4", "185");

Honda.color="blue"

Honda.reportInfo();
// "This model is the CRV which has a 4-cylinder engine and 185 bhp"
