/*Crea una funcion llamada palindrome() que reciba como parametro una palabra, si la oracion es unpalindromo la funcion debera devolver true en otro caso, devolver false */

const palabra = 'reconocer';
const oracion = 'A mi loca, Colima';

function palindrome(palabra) {
    let reverse = '';
    for (var i = (palabra.length - 1); i >= 0 ; i--) {
        reverse += palabra[i]
    }
    
    return palabra === reverse ? true : false;
}

function palindrome2(oracion) {
    const word = oracion.toLowerCase().split(' ').join('').split(',').join('');

    return palindrome(word)
}

// palindrome(palabra)
palindrome2(oracion)


/* Crea una funcion llamada longestCountry(), esta funcion recibira de parametro un arreglo con nombres de distintos paises, la funcion debera retornar el pais con mayor numero de letras. */

const paises = ['Guatemala', 'Argentina', 'Groenlandia', 'Mexico', 'Estados unidos', 'El salvador', 'Panama'];

function longestCountry(paises) {
    let numeroLetras = 0;
    let pais = '';
    
    for(let index = 0; index < paises.length; index++){
        if(paises[index].length > numeroLetras) {
            numeroLetras = paises[index].length
            pais = paises[index]
        }
    }
    
    return `El pais que tiene mas letras es ${pais}`;
}

longestCountry(paises)


/* Escribir un programa que muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 (o de 15), por la palabra “fizzbuzz”. */

for (let index = 1; index <=100; index++) {
    if (index%3==0 && index % 5==0) {
        console.log("fizzbuzz")
    } else if (index% 5==0) {
        console.log("buzz")
    } else if (index%3==0) {
        console.log("fizz")
    } else console.log (index)
}