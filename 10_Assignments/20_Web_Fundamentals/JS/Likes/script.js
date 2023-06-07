var user1_like_count = 9;
var user2_like_count = 12;
var user3_like_count = 9;

var user1_h3 = document.querySelector(".user1 h3");
var user2_h3 = document.querySelector(".user2 h3");
var user3_h3 = document.querySelector(".user3 h3");

function user1_click() {
  user1_like_count++;
  user1_h3.innerText = user1_like_count + " like(s)";
}
function user2_click() {
  user2_like_count++;
  user2_h3.innerText = user2_like_count + " like(s)";
}
function user3_click() {
  user3_like_count++;
  user3_h3.innerText = user3_like_count + " like(s)";
}
