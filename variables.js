var Test = require('./Test.js');

var primero = '^([a-z]|[A-Z]|\$|_)';
var siguiente = '([a-z]|[A-Z]|\$|_|[0-9])*$';
var variable = new RegExp(primero + siguiente,'g');

if(variable.test("test")){
    console.log("test es una variable");
}else{
    console.log("test no es una variable");
}