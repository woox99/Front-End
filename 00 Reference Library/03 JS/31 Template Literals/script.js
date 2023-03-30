// template literals `` allow you to put variables in strings
var x = 10;
var y = 5;

var string = "${x} + ${y} = ${x+y}";
var string_plus_variables = x + " + " +  y + " = " + x + y;
var template_literal = `${x} + ${y} = ${x+y}`;

console.log(string);
console.log(string_plus_variables);
console.log(template_literal);
