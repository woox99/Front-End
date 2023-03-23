// for loops are good if you know how many actions you want
// while loops are good if the number of actions is not determined
// break; will exit the loop
// break; will exit the loop

for (var num = 0; num <= 5; num++) {
  console.log("num = " + num);
}


var arr = [2,4,6,8,10];
for (var i = 0; i < arr.length; i = i + 1) {        
    console.log("i = " + i);             // prints the index       
    console.log("arr[" + i + "] = " + arr[i]);        // prints the array value at that index
}

