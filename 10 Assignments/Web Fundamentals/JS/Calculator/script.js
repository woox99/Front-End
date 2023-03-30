var displayDiv = document.querySelector("#display");
var value=0;
var holder=0;
var opper = "";
var total=0;

    function clr(){
        value = 0;

        displayDiv.innerText = value;

    }

    function press(single_value){

            value = value * 10 + single_value;

        displayDiv.innerText = value;
    }

    function setOP(opp){
        opper = opp;
        holder = value;
        value = 0;
        // console.log(opp);
        
    }

    function calculate(){
        if( opper === "+"){
            total = holder + value;
        }
        else if( opper == "-"){
            total = holder - value;
        }
        else if( opper == "*"){
            total = holder * value;
        }
        else if( opper == "/"){
            total = holder / value;
        }
        else if(opper == "C"){
            total = 0;
        }
        displayDiv.innerText = total;
    }
