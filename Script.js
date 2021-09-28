let name = prompt("what is your name")
let age = prompt("age?")
let message = (age<3) ? "hi Baby!" :
    (age<18) ? "Hi Kiddo":
    (age<100) ? "Hi Adult":
    "Ohh you are Centurion";
alert(message)
let dateofBirth = 2021-age
if (age <18) {
    alert("Hi"+ name + "." + `your age is ${age}.`+ `You were born in ${dateofBirth}` +
     "you are below 18 so you cannot access the website");
}
else {alert("Hi"+ name + "." + `your age is ${age}.`+ `You were born in ${dateofBirth}`+"you are above 18, so access the website");}





