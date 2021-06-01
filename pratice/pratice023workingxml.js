var xmlhttp = new XMLHttpRequest();
var url = "xml/invoice.xml";
xmlhttp.open("GET", url, false);
xmlhttp.send();
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var xmlDoc = xmlhttp.responseXML;

    var number = xmlDoc.getElementsByTagName("Number")[0].childNodes[0].nodeValue; 
    var date = xmlDoc.getElementsByTagName("Date")[0].childNodes[0].nodeValue; 
    var name = xmlDoc.getElementsByTagName("Name")[0].childNodes[0].nodeValue; 
    var company = xmlDoc.getElementsByTagName("Company")[0].childNodes[0].nodeValue;
    var address = xmlDoc.getElementsByTagName("Address1")[0].childNodes[0].nodeValue;
    var city = xmlDoc.getElementsByTagName("City")[0].childNodes[0].nodeValue;
    var state = xmlDoc.getElementsByTagName("State")[0].childNodes[0].nodeValue; 
    var zip = xmlDoc.getElementsByTagName("Zip")[0].childNodes[0].nodeValue; 
    var country = xmlDoc.getElementsByTagName("Country")[0].childNodes[0].nodeValue;

    var sku1 = xmlDoc.getElementsByTagName("SKU")[0].childNodes[0].nodeValue;
    var item1 = xmlDoc.getElementsByTagName("Description")[0].childNodes[0].nodeValue;
    var amount1 = xmlDoc.getElementsByTagName("Amount")[0].childNodes[0].nodeValue;
    var unitcost1 = xmlDoc.getElementsByTagName("Cost")[0].childNodes[0].nodeValue;
    var subtotal1 = xmlDoc.getElementsByTagName("Subtotal")[0].childNodes[0].nodeValue;

    var sku2 = xmlDoc.getElementsByTagName("Sku")[1].childNodes[0].nodeValue;
    var item2 = xmlDoc.getElementsByTagName("Description")[1].childNodes[0].nodeValue;
    var amount2 = xmlDoc.getElementsByTagName("Amount")[1].childNodes[0].nodeValue;
    var unitcost2 = xmlDoc.getElementsByTagName("Cost")[1].childNodes[0].nodeValue;
    var subtotal2 = xmlDoc.getElementsByTagName("Subtotal")[1].childNodes[0].nodeValue;

    var subtotal = xmlDoc.getElementsByTagName("TotalBeforeTax")[0].childNodes[0].nodeValue; 
    var tax = xmlDoc.getElementsByTagName("Tax")[0].childNodes[0].nodeValue;

    document.writeln('Invoice Number: ' + Number + 'Invoice Date: ' + date + '<br><br>BILL TO:<br>');
    document.writeln(Name + ', ' + company + '<br>');
    document.writeln(address + '<br>');
    document.writeln(city + ', ' + state + ' ' + zip + '<br>');
}
