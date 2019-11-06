function submitData() {
    const password = document.getElementById("contra").value;

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

    const MyRegExp = new RegExp('^' + MinDig + MinMinus + MinMayus + MinCarEsp + Sig + Long + '$');

    const match = MyRegExp.test(password);

    if (match) {
        alert('contraseña aceptada');
    } else {
        alert('contraseña no aceptada');
    }

}

function submitVar() {
    let variable = document.getElementById("variable").value; //minima longitud de contraseña

    if(variable == ""){
        alert('ingrese los valores faltantes');
    }else{

        let primero = '^([a-z]|[A-Z]|\\$|_)';
        let siguiente = '([a-z]|[A-Z]|\\$|_|[0-9])*$';
        const myRegex = new RegExp(primero + siguiente,'g');

        const match = myRegex.test(variable);

        if(match){
            alert(`${variable} es una variable`);
        }else{
            alert(`${variable} no es una variable`);
        }
    }
}