// console.log("test")

var profile_name = document.querySelector(".profile h1");
// profile_name.innerText = "Garett Janulewicz";

function edit(){
  profile_name.innerText = "Garett Janulewicz";
}

// Connection request
var requests_num = 2;
var connections_num = 499;
var requests = document.querySelector("#r_num");
var connections = document.querySelector("#c-num");

var todd = document.querySelector("#todd");
function hide_todd(){
  requests_num--;
  requests.innerText=requests_num;
  todd.remove();
}
function hide_todd_add(){
  requests_num--;
  requests.innerText=requests_num;
  connections_num++;
  connections.innerText=connections_num;
  todd.remove();
}

var phil = document.querySelector("#phil");
function hide_phil(){
  requests_num--;
  requests.innerText=requests_num;
  phil.remove();
}
function hide_phil_add(){
  requests_num--;
  requests.innerText=requests_num;
  connections_num++;
  connections.innerText=connections_num;
  phil.remove();
}