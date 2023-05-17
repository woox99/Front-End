console.log("test");

var temp_1_high = document.querySelector(".card1 .high");
var temp_1_low = document.querySelector(".card1 .low");
var temp_2_high = document.querySelector(".card2 .high");
var temp_2_low = document.querySelector(".card2 .low");
var temp_3_high = document.querySelector(".card3 .high");
var temp_3_low = document.querySelector(".card3 .low");
var temp_4_high = document.querySelector(".card4 .high");
var temp_4_low = document.querySelector(".card4 .low");

var num1_high = 24;
var num1_low = 18;
var num2_high = 27;
var num2_low = 19;
var num3_high = 21;
var num3_low = 16;
var num4_high = 26;
var num4_low = 21;

function convert(element) {
  if(element.value=="c"){
    temp_1_high.innerText = "°" + num1_high;
    temp_1_low.innerText = "°" + num1_low;
    temp_2_high.innerText = "°" + num2_high;
    temp_2_low.innerText = "°" + num2_low;
    temp_3_high.innerText = "°" + num3_high;
    temp_3_low.innerText = "°" + num3_low;
    temp_4_high.innerText = "°" + num4_high;
    temp_4_low.innerText = "°" + num4_low;
  }
  else{
    temp_1_high.innerText = "°" + convert_value(num1_high);
    temp_1_low.innerText = "°" + convert_value(num1_low );
    temp_2_high.innerText = "°" + convert_value(num2_high);
    temp_2_low.innerText = "°" + convert_value(num2_low );
    temp_3_high.innerText = "°" + convert_value(num3_high);
    temp_3_low.innerText = "°" + convert_value(num3_low );
    temp_4_high.innerText = "°" + convert_value(num4_high);
    temp_4_low.innerText = "°" + convert_value(num4_low );
  }
}

function convert_value(num){
  var value = num * 9/5 +32;
  return value;
}


// hides the cookie when accpt is clicked
var alert = document.querySelector("#alert");

function hide(){
  alert.remove();
}