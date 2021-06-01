function Car(model, distanceMoved, timeElapsed) {
    this.model = model;
    this.distanceMoved = distanceMoved;
    this.timeElapsed = timeElapsed;
    //create a reference to a function to use as a method
    this.velocity = function () {
        var result = this.distanceMoved / this.timeElapsed;
        return result;
    }

}

var myCar = new Car("Audi", 120, 1.2)

document.writeln("The model of the car is: "+myCar.model+"<BR>"+
                 "The distance travelled is: "+myCar.distanceMoved+"<BR>"+
                 "The time elapsed is: "+myCar.timeElapsed+"<BR>"
    );
