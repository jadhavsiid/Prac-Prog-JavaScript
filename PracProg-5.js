document.write("<h1> WAP in JS to swap two numbers </h1>");
document.write("<p> Check Console </p>");

// swapping using temp variable
var a = 45;
var b = 12;
var temp;
console.log("Before swapping:");
console.log("a = ", a);
console.log("b = ", b);
temp = a;
a = b;
b = temp;
console.log("After swapping:");
console.log("a = ", a);
console.log("b = ", b);

// swapping without using temp variable
var c = 5;
var d = 6;
console.log("Before swapping:");
console.log("c = ", c);
console.log("d = ", d);
var c = c + d;
var d = c - d;
var c = c - d;
console.log("After swapping:");
console.log("c = ", c);
console.log("d = ", d);
