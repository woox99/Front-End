// This is how you would perform this action with JS
// var btns = document.querySelectorAll("button");
    
// for(var i=0; i<btns.length; i++) {
//     btns[i].addEventListener("click", function(){
//         alert("Button clicked!");
//     });
// }

// This is how you would perfrom this action with jQuery
// .click is an event
$("button").click(function() {
    alert("Button clicked");
});

// Other events include:
// .hover
// .change
// .submit

// Effects include:
// .hide
// .fadeOut
// .sideUp

// makes buttons disappear when hovered
// $("button").hover(
//     function() {
//         $("button").hide();
//     }
// );

