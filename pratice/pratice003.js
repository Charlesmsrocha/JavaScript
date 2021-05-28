var airlines = new Array();
airlines[0] = "Delta";
airlines[1] = "Us Airways";
airlines[2] = "American";
airlines[3] = "jetBlue";
airlines[4] = "Vingin America";
airlines[5] = "United";
airlines[6] = "Air Canada";
airlines[7] = "Southwest";
airlines[8] = "British Airways";

function output(){
    var output = "The position of southwest is: " + airlines.indexOf("Southwest");
    document.getElementById('output').innerHTML = output;
    //airlines.sort();
    airlines.reverse();
    //airlines.push("AeroMexico");
    airlines.pop();
    for(var i=0; i< airlines.length; i++){
        document.getElementById('output').innerHTML += "<br/>" + airlines[i];
    }
}
