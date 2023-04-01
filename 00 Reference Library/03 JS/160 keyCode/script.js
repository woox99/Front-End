// prints browser document to console
console.dir(document);

// sets a function to execute on key down
document.onkeydown = function(e){
    console.log("A key was pressed");

    // key gets passed to e
    console.log(e);

    // prints the keyCode for the key pressed
    console.log(de.keyCode);
}

