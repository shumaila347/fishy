var number 
var number = 5;
var number1 = ++number ;
var number2 = number++ + ++number1  ;
var number3 = --number + --number1 ;
var number4 = --number - number   ;



document.querySelector("p").innerHTML= "value after declearation is undefine ";
document.querySelector("p1").innerHTML= "Initial value: 5 "  ;
document.querySelector("p2").innerHTML= "value after increament: " + number1 ;
document.querySelector("p3").innerHTML= "value after addition is : " + number2 ;
document.querySelector("p4").innerHTML= "value after decreament is : " + number3 ;
document.querySelector("p5").innerHTML= "The remainder is : " + number4 ;
