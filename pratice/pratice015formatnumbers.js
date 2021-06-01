var myNum1 = 123.4567890;

var myNum2D = myNum1.toFixed(2);

document.writeln("This is the result of the toFixed method: " + myNum2D + "<BR>");

var myNum2 = 123.4567890;

document.writeln("This is the result of myNum2.toPrecision(): " + myNum2.toLocaleString() + "<BR>");
document.writeln("This is the result of myNum2.toPrecision(2): " + myNum2.toLocaleString(2) + "<BR>");
document.writeln("This is the result of myNum2.toPrecision(3): " + myNum2.toLocaleString(3) + "<BR>");

document.writeln("LocaleString: " + myNum2.toLocaleString() + "<BR>");
