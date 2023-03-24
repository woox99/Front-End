// These operators are built-in functions
var i=0;
i++; // i = i + 1
i += 3 // i = i + 3
console.log(" i = " + i);

// % modulus
console.log(5 % 2)   //This would print 1
console.log(6 % 2)   //This would print 0
console.log(8 % 3)   //This would print 2

//Math.round(num) rounds a number
var num1 = Math.round(2.5)   //num1 is 3
var num2 = Math.round(2.4)   //num2 is 2
var num3 = Math.round(-2.9)  //num3 is -3
var num4 = Math.round(-2.1)  //num4 is -2

//Math.floor(num) rounds a number down
var num1 = Math.floor(2.5)   //num1 is 2
var num2 = Math.floor(2.4)   //num2 is 2
var num3 = Math.floor(-2.9)  //num3 is -3
var num4 = Math.floor(-2.1)  //num4 is -3

//Math.ceil(num) rounds a number up
var num1 = Math.ceil(2.5)   //num1 is 3
var num2 = Math.ceil(2.4)   //num2 is 3
var num3 = Math.ceil(-2.9)  //num3 is -2
var num4 = Math.ceil(-2.1)  //num4 is -2

//Math.trunc(num) chops of the decimal and DOES NOT round number
var num1 = Math.trunc(2.5)   //num1 is 2
var num2 = Math.trunc(2.4)   //num2 is 2
var num3 = Math.trunc(-2.9)  //num3 is -2
var num4 = Math.trunc(-2.1)  //num4 is -2

var max = arr[0];
var min = arr[0];
var sum = 0;
var avg = 0;
var arrnew = [];

for(var i=0; i<arr.length; i++){
  sum = sum + arr[i];

  if(arr[i]>max){
    max = arr[i];
  }
  if(arr[i]<min){
    min = arr[i];
  }
}

avg = sum / i;
arrnew = [max,min,avg];