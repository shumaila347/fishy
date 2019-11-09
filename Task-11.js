var Celcius = 25 ;
var Farhenhiet =(((Celcius*9)/5)+32); 
alert("33 Celcius is equal to " + Farhenhiet + " Farhenheit" );

var Farhenhiet1 = 70 ;
var  Celcius1 =(((Farhenhiet1-32)*5)/9);
alert("33 Farhenhiet is equal to " + Celcius + " Celcius" );

document.querySelector("p").innerHTML= "25 Celcius is" + Farhenhiet + "Farhenheit";
document.querySelector("p1").innerHTML= "70 Farhenheit is" + Celcius1 + "Celcius";