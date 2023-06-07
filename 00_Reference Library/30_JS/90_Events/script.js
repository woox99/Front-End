// YOU DO NOT HAVE TO USE THESE ON ONLY BUTTONS

// onclick
// onclick
function custom() {
    console.log("this message is coming from script.js");
}

// this
function example(element) {
    console.log("The element that was clicked", element);
}

// .innerText
function turn_off(element) {
    element.innerText = "OFF";
}

// .remove()
function hide(element) {
    element.remove();
}

// Hover
// Hover
function over(element) { 
    element.style.backgroundColor = "lime";
}
function out(element) { 
    element.style.backgroundColor = "silver";
}