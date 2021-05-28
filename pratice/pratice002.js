        //Global Scope
        var myDog = "Renatin";

        function Dog(myDog) {
            //local scope
            var myDog3 = myDog;

            alert("This is the local variable: " + myDog3);
            return myDog3;
        }

        var myDog = Dog("Spot");

        document.writeln("This is the global variable: " + myDog);
        document.writeln("<BR>This is the \"private\" Local variable returned by the function: +myDog2");
        document.writeln(myDog3);
        