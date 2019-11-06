const string = "Contra1!";

//Al menos uno requerido para que cumpla la condición de contraseña
const MinDig = '(?=.*[\\d])';
const MinMayus = '(?=.*[A-Z])';
const MinMinus = '(?=.*[a-z])';
const MinCarEsp = '(?=.*[^a-zA-Z0-9])';

//despues de que se cumpla la condición, el caracter insertado puede ser cualquiera.
const Sig = '(\\w|[^a-zA-Z0-9])';

//Longitud de 8
const Long = '{8,}';

//var re = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9])(\w|[^a-zA-Z0-9]){8,}$/;

const MyRegExp = new RegExp('^'+MinDig+MinMinus+MinMayus+MinCarEsp+Sig+Long+'$');

const match = MyRegExp.test(string);

if(match){
    console.log('aceptado');
}else{
    console.log('no aceptado');
}