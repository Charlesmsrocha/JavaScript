//i --- cas sensitive
var str = "This is a sample string";
var re = /Sample/i;
var re = new RegExp("sample", "i");

var check = re.exec(str);
if (check) {
    alert("Found a match");
    alert(check);
} else {

    alert("No match found");

}

var check2 = re.test(str);

alert(check2);
