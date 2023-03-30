function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

var seconds_hand = document.querySelector("#seconds");
var minutes_hand = document.querySelector("#minutes");
var hour_hand = document.querySelector("#hour");

setInterval( function() {
    // var time = getSecondsSinceStartOfDay();
    console.log(new Date().getSeconds());

    seconds_hand.style.transform = "rotate(" + (new Date().getSeconds() * 6 + 180) + "deg)";
    minutes_hand.style.transform = "rotate(" + (new Date().getMinutes() * 6 + 180) + "deg)";
    hour_hand.style.transform = "rotate(" + (new Date().getHours() * 30 + 180) + "deg)";

}, 1000);
