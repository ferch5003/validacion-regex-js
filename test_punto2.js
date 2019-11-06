const string = "$test";

let primero = '^([a-z]|[A-Z]|\\$|_)';
let siguiente = '([a-z]|[A-Z]|\\$|_|[0-9])*$';
const MyRegExp = new RegExp(primero + siguiente,'g');
 
const match = MyRegExp.test(string);
 
if(match){
    console.log(`${string} es una variable`);
}else{
    console.log(`test no es una variable`);
}