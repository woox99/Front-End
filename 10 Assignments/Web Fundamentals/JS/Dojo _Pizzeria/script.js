function pizzaOven(){
    var pizza = {
        crust: crust(),
        sauce: sauce(),
        cheese: cheese(),
        toppings: toppings(),
    }
    return pizza;
}

function crust(){
    var rand = Math.random();
    if( rand > 0.5 ){
        return "pan";
    }
    else{
        return "thin";
    }
}
function sauce(){
    var rand = Math.random();
    if( rand > 0.5 ){
        return "red";
    }
    else{
        return "white";
    }
}
function cheese(){
    var rand = Math.random();
    if( rand > 0.5 ){
        return "extra cheese";
    }
    else{
        return "light cheese";
    }
}
function toppings(){
    var rand = Math.random();
    if( rand < 0.33 ){
        return "pepporoni";
    }
    else if( rand > 0.33 && rand < 0.66){
        return "sausage";
    }
    else{
        return "pine apple"
    }
}

console.log(pizzaOven());