function checkPw(pw){
    if(pw=="chocolate")
    {
        document.getElementById('pwStatus').innerHTML="Acess Allowed";
        document.getElementById('password').style.backgroundColor="rgb(0,255,0)";
    } else {
        document.getElementById('pwStatus').innerHTML="Acess Denied";
        document.getElementById('password').style.backgroundColor="rgb(255,0,0)";
    }
}
