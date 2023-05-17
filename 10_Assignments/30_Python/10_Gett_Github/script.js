var username_input = "";
var username = document.querySelector(".username");
var users_name = document.querySelector(".name");
var area = document.querySelector(".location");
var bio = document.querySelector(".bio");
var pic = document.querySelector(".profile_picture");

function get_username(element){
    username_input = element.value;
}

async function get_data() {
    var response = await fetch("https://api.github.com/users/" + username_input);
    var data = await response.json();

    console.log(data) //debug
    username.innerText = data.login;
    users_name.innerText = data.name;
    console.log(data.name)
    area.innerText = data.location;
    bio.innerText = data.bio;
    pic.src = data.avatar_url;
}
