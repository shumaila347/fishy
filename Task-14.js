var a = 2
var b = 1
var x = --a
var y = --a - --b
var z = --a - --b + ++b 
var Result = --a - --b + ++b + b--
document.querySelector("p").innerHTML="--a : " + x ;
document.querySelector("p2").innerHTML=" --a - --b : " + y;
document.querySelector("p3").innerHTML="--a - --b + ++b : " + z ;
document.querySelector("p4").innerHTML="result is --a - --b + ++b + b-- : " + Result ;