var displayDiv = document.querySelector(".display");
var value="";
var holder=0;
var opper = "";
var total=0;

    function clr(){
        value = 0;

        displayDiv.innerText = value;

    }

    function press(single_value){

            value += single_value;

        displayDiv.innerText = value;
    }

    function setOP(opp){
        value = parseFloat(value);
        opper = opp;
        holder = value;
        value = "";
        // console.log(opp);
        
    }

    function calculate(){
        value = parseFloat(value);
        
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
