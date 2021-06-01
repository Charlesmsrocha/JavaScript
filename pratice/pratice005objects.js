var dog = new Object();
    dog.name = "Teddy";
    dog.gender = "male";
    dog.age = 3;
    dog.breed = "mixed"
    dog.trained = true;
    document.writeln("The dog's name is: " + dog.name + "<BR>" +
                     "The dog's gender is: " + dog.gender + "<BR>" +
                     "The dog's age is: " + dog.age + "<BR>" +
                     "The dog's breed is: " + dog.breed + "<BR>");
    for (x in dog) {
        document.writeln(dog[x] + "<BR>");
    }
    