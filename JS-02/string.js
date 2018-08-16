//string

let saludo = 'Bienvenido al curso de JavaScript desde 0';
let mensaje = 'Gato';

//Propiedades
let longitud = saludo.length;
//al contar la longitud de caracteres tambien se cuentan los espacios en blanco

console.log(saludo);
console.log(`Longitud de caracteres : ${ longitud }`);

//Metodos (Sin parametros)

//Trim: Quita los espacios en blanco al inicio y al final
console.log(saludo.trim());

//toUpperCase: Convierte todo el texto en mayusculas
console.log(saludo.toUpperCase());

//toUpperCase: Convierte todo el texto en minusculas
console.log(saludo.toLowerCase());

function totalCaracteres(valor)
{
    let total = valor.length;
    return total;
}


//Metodos con Parametros

//indexOf: Recibe dos parametros donde el segundo es opcional, indica la posicion inicial del parametro dado o desde que indice deseas encontrar
// variable.indexOf(String[1]);
function indiceCaracteres(valor)
{
    let indice = valor.indexOf('LL',2);
    return indice;
}

//lastIndexOf: Recibe dos parametros donde el segundo es opcional, indica la ultima posicion del parametro dado o desde que indice deseas encontrar
// variable.lastIndexOf(String[1]);
function ultimoIndiceCaracteres(valor)
{
    let ultimoIndice = valor.lastIndexOf('L');
    return ultimoIndice;
}

//replace: oldString y newString , la condicion para este es: para remplazar el anterior valor se debe crear uno nuevo que contendra al valor remplazado
function reemplazar(valor)
{
    let rem = valor;
    let remNuevo = valor.toUpperCase().replace('G','R');
    let remAct = remNuevo.toLowerCase().replace('o','a');
    
    return remAct;

}

//split: recibe dos parametro , limitador que deseamos  y el segundo la cantidad de elementos que deseas recorrer. split es un arreglo separado por comas
function separador(valor)
{
    let rem = valor.split(' ',4);    
    return rem;

}

console.log(mensaje);
console.log(separador(saludo));

//substring, substr, slice
let subString , substr, slice;

subString = saludo.substring(11,-2);
console.log(subString);

substr = saludo.substr(10,2);
console.log(substr);

slice = saludo.slice(4,8);
console.log(slice);


//Nuevos metodos ES6 (devuelen un Boolean)
//.startsWith(), endsWith(), includes()
console.log(saludo.startsWith('B'));
console.log(saludo.endsWith('0'));
console.log(saludo.includes('F'));













