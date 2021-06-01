function rollDice() {
    var num1 = Math.floor((Math.random() * 4) + 1);
    var num2 = Math.floor((Math.random() * 6) + 1);
    var num3 = Math.floor((Math.random() * 8) + 1);
    var num4 = Math.floor((Math.random() * 10) + 1);
    var num5 = Math.floor((Math.random() * 12) + 1);
    var num6 = Math.floor((Math.random() * 20) + 1);
    var num7 = Math.floor((Math.random() * 100) + 1);
    var results = document.getElementById("div1");
    results.innerHTML = "D04 is: " + num1 + 
    "<BR>D06 is: " + num2 +
    "<BR>D08 is: " + num3 +
    "<BR>D10 is: " + num4 +
    "<BR>D12 is: " + num5 +
    "<BR>D20 is: " + num6 +
    "<BR>D100 is: " + num7;

}