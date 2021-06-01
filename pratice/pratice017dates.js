var today = new Date();

var anniversary = new Date("April 25, 1993 12:00:00");

var birthday = new Date(1991, 06, 07);

//formatting
document.writeln("This is the result of creating a standard Date object: " + today.toString() + "<BR>");
document.writeln("This is the result of using the GMTString " + anniversary.toGMTString() + "<BR>");
document.writeln("This is the result of UTCString" + anniversary.toUTCString() + "<BR>");
document.writeln("This is the result of the LocaleString " + birthday.toLocaleDateString() + "<BR>");

//getting specific information
document.writeln("This is the new miliseconds: " + today.getMilliseconds() + "<BR>");

//setting specific information
birthday.setYear(1950);
document.writeln("This is the new date: " + birthday.toLocaleDateString() + "<BR>");
