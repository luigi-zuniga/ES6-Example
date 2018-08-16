//Funciones
/**
 * Son bloques de codigo reutilizables
 * 
 */
//Parametros y argumentos
// Parametro: 
// Es la variable temporal que existe en la function
    /**
     * function suma(a,b){  <-- a y b son parametros, ya que son datos temporales que existiran en la funcion
     *     console.log(a + b);
     * }
     */
//Argumento
// es el dato real que se le da a la funcion
/**
 * suma(1,8) <-- (1,8) son argumentos, ya que son datos reales los que se entregan a la funcion
 */

 /**
  * LOS SIGUIENTES EJEMPLOS SON LAS FORMAS DE DEVOLVER FUNCIONES
  */
console.log("========== Devolver una funcion ==========");
function suma(a,b)
{
    return a + b;
}

suma(1,5);
let miSuma = suma(4,7);
console.log(miSuma);
//con return podemos devolver valores inclusive objetos
// Javascript nos retorna un error token , al tener funciones con mismo nombre de parametro
console.log("========== Funciones devolviendo Objetos ==========");
function calculo(c,d)
{
    return {
        c: c + 1,
        d: d * 2
    }
}


let miCalculo = calculo(3,4);
console.log(miCalculo);

console.log("========== Funciones dentro de un objeto ==========");
/**LLamar a una funcion si es parte de un objeto */
let obj = 
{
    nombre : 'Prueba',
    resta(a,b)
    {
        console.log('Obj.resta(',a,b,')');
        return a - b;
    }
};

let miResta = obj.resta(10,5);
console.log(`Retorno de valor en una funcion resta dentro de un objeto: \n ${ miResta }`);

//Funcion puede estar dentro de otra funcion
console.log("========== Funciones que devulven otras funciones ==========");
function multiplicacion(a)
{
    return function(b)
    {
        return a * b;
    }
}
console.log(multiplicacion(5));
console.log(multiplicacion(5)(3));


console.log("========== Funciones autoinvocadas ==========");
//Funciones autoinvocadas, estas se ejecutan solas , sin que tengamos que llamarlas de manera previa
let miFuncMultiplicacion = (
    function(a,b)
    {
        return a*b;
    })(2,8);
console.log(miFuncMultiplicacion);


console.log("========== Funciones Constructoras ==========");

let Pais = function(nombre,moneda)
{
    this.nombre = nombre;
    this.moneda = moneda;
};
/*let chile = Pais(); <== Asi no se ejecutan las funciones constructoras , ya que no devulven el objeto*/
let chile = new Pais();
console.log(chile);

let chileVal = new Pais('Chile','Peso');
console.log(chileVal);

/**apply() y call() */
function add(a,b,c)
{
    return a + b + c;
}

let numeros = [2,3,4];

let myAdd = add(numeros);
/**En este ejemplo estamos enviando erroneamente una arreglo a una funcion que recibe 3 parametros, 
 * creyendo que los tres valores dentro son los que se deben ejecutar */
//Como resultado obtendremos 
// 2,3,4undefinedundefined <-- lo toma de la siguiente manera 
// add([2,3,4],b,c); --> 2,3,4 undefined undefined
console.log(myAdd);

console.log("========== Llamar funciones de manera indirecta  ==========");
console.log("==========  APPLY -==========");
let mynewAdd = add.apply(undefined,numeros);
/**
 * undefined es un scope (disparador)
 * que pone en contexto a la funcion indicando que no esta definido 
 * y el toma los valores del arreglo de manera independiente no con todo el arreglo
 * // add([2,3,4],b,c); --> 2,3,4 undefined undefined
 * // add.apply('undefined contexto no definido',1,2,3); --> 2,3,4 
 */
console.log(mynewAdd);


/**call no permite poner arreglos directamente al llamar a la funcion 
 * 
*/


console.log("========== CALL ==========");
let newCalladd = add.call(undefined,3,3,10);
console.log(newCalladd);


/** */
let cinco = 5;


function resta(x,y)
{
    y = 3;
    x = 8;
    return   x - y;
}

console.log(resta(cinco,9));
