// setTimeout will perform its paramater at give time. Number is in ms

i=0;

function print(){
  console.log(i);
  i++;
}

setTimeout(print,250);
setTimeout(print,500);
setTimeout(print,750);
setTimeout(print,1000);
setTimeout(print,1250);
setTimeout(print,1500);

