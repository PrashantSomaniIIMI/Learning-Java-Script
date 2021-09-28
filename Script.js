let name = prompt("what is your name")
let userID = prompt("what is user ID")
if (userID =="Admin") {
    inputPassword = prompt("Enter Password");
}
    else if (userID == "") {
    alert("Canceled");
}   else {alert ('unknown user');
    }
if (inputPassword=="TheMaster")
    {
        alert("welcome!")
    }
    else if (inputPassword =="") {
        alert("Canceled");
    }   else {alert ('wrong password');
        }
   