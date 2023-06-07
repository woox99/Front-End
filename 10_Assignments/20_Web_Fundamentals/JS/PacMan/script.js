
var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,2,2,1,1,1,2],
    [2,1,2,1,1,2,1,2,1,2],
    [2,1,2,2,1,2,1,2,1,2],
    [2,1,1,1,1,1,1,2,1,2],
    [2,1,2,2,1,2,2,2,1,2],
    [2,1,2,2,1,1,1,1,1,2],
    [2,1,1,1,1,2,1,2,1,2],
    [2,1,2,1,2,2,1,2,1,2],
    [2,1,1,1,1,1,1,1,3,2],
    [2,2,2,2,2,2,2,2,2,2]
];

var pacman = {
    x: 1,
    y: 1
};

var score = 0; 

function displayWorld(){
    var output = "";

    for( var i=0; i<world.length; i++){
        output += "\n<div class='row'>\n";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j]==2){
                output += "<div class='brick'></div>";
            }
            else if(world[i][j]==0){
                output += "<div></div>";
            }

            // added cherry
            else if(world[i][j]==3){
                output += "<div class='cherry'></div>";
            }
            else{
                output += "<div class='coin'></div>";
            }
        }
        output += "\n</div>";
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20 + "px";
    document.getElementById('pacman').style.left = pacman.x*20 + "px";
}

displayWorld();
displayPacman();

// for finding keyCode
// console.dir(document);


document.onkeydown = function(e){
    // console.log(e.keyCode);
    if(e.keyCode==37 && world[pacman.y][pacman.x-1] != 2){
        pacman.x--;
        document.getElementById('pacman').style.transform = "scaleX(-1)";
        document.getElementById('pacman').style.rotate = "0deg";
    }
    else if(e.keyCode==38 && world[pacman.y-1][pacman.x] != 2){
        pacman.y--;
        document.getElementById('pacman').style.transform = "none";
        document.getElementById('pacman').style.rotate = "270deg";
    }
    else if(e.keyCode==39 && world[pacman.y][pacman.x+1] != 2){
        pacman.x++;
        document.getElementById('pacman').style.transform = "none";
        document.getElementById('pacman').style.rotate = "0deg";
    }
    else if(e.keyCode==40 && world[pacman.y+1][pacman.x] != 2){
        document.getElementById('pacman').style.transform = "none";
        document.getElementById('pacman').style.rotate = "90deg";
        pacman.y++;
    }

    if(world[pacman.y][pacman.x]==1){
        world[pacman.y][pacman.x] = 0;
        displayWorld();
        score += 10;
        document.getElementById('score').innerText = score;
    }
    else if(world[pacman.y][pacman.x]==3){
        world[pacman.y][pacman.x] = 0;
        displayWorld();
        score += 50;
        document.getElementById('score').innerText = score;
        document.getElementById('pacman').style.backgroundColor = "red";
        document.getElementById('pacman').style.borderRadius = " 10px";
    }
    displayPacman();
}