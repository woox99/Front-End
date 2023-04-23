var userName = document.querySelector(".username");
var area = document.querySelector(".location");
var photo = document.querySelector(".photo");

async function getData() {
    var response = await fetch("https://api.github.com/users/woox99");
    var data = await response.json();

    console.log(data);
    
    userName.innerText = "Username: " + data.login;
    area.innerText = "Location: " + data.location;
    photo.src = data.avatar_url;
    
}
    

function addData(){
    getData();
}

