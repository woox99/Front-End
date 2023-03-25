
// ARRAYS
// ARRAYS
var user = [];

user = ["Garett", "Janulewicz", "Hawaii"]; // creates array
console.log(user); // prints array to concole

user.push("Basalt"); //adds a new index in the array
console.log(user);

user.pop(); // removes last index in array
console.log(user);

console.log(user[2]);
user[2] = "Philippines"; // assigns a value to the index2 (thrid index). In this case reassigns
console.log(user);

// IMPORTANT
user.length //is the length of the array
console.log(user.length);


// sum numbers in array
arr = [2, 4, 5, 1, 2];
var sum=0;
for( var i=0; i<arr.length; i++){
    sum += arr[i];
}
console.log(sum);

// __________________________________________________________________________________________________________________
// OBJECTS
// OBJECTS
var taco1 = {
    tortilla: "flour",
    protein:  "chicken",
    toppings: ["lettuce", "cheese", "tomato"],
    tacoInfo: function() {
        console.log("Tortilla: " + taco1.tortilla);
        console.log("Protein:  " + taco1.protein);
        console.log("Toppings: " + taco1.toppings);
        // this does the same thing as taco1
        console.log("Tortilla: " + this.tortilla);
        console.log("Protein:  " + this.protein);
        console.log("Toppings: " + this.toppings);
    }
}
    
// we can now still get all the delicious taco facts by
taco1.tacoInfo(); // note tacoInfo still gets called like a function
