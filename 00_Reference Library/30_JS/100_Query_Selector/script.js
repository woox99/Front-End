// Query Selector
// Query Selector
// Both of these will select the h1 tag
var h1 = document.querySelector("h1"); 
var title = document.querySelector("#title");

// Same selector properties apply
var logoImg = document.querySelector(".nav p");


// Changing an element
// Changing an element
var h3 = document.querySelector("h3");
console.log(h3);
h3.innerText = "I love you";

// Example 2
var petImg = document.querySelector("#pet-img");

function switchImg() { 
    petImg.src = "todd.jpg";
}

// Example 3
function setActive(element) { 
    element.style.backgroundColor = "#222222";
    element.style.color = "#ffffff";
}

// instead of using querySelector you can use this DOM method
// for example 2
function switchImg2() { 
    // petImg.src = "todd.jpg";
    document.getElementById('dom').src = "todd.jpg";
}
