/**Parametros y argumentos */
/**Un parametro es una variable local que se utiliza en la funcion */


function suma(a,b)
{
    return a +b;
}

//console.log(suma(2,4));

//Objeto arguments : 
//Es un objeto que contiene todos los argumentos que son enviados.

console.log('=========== Objeto.Arguments ===========');
function resta(a,b)
{
    //Esta es la mejor prueba de que parametros y argumentos son diferentes   
    console.log(arguments)
}

resta(5,12,45,1,2);

/**
 * Si hay mas parametros que argumentos , los argumentos faltantes son undefined
 */


 /**Objeto Arguments */

 /*ejemplo en ES5 para retornar un objeto arguments*/

 console.log('=========== Retorno de Objeto.argument con ES5 ===========');

function sumarTodos()
{
    console.log(arguments);

    var acum = 0;
    for(var i=0;i < arguments.length;i++)
    {
        acum+= arguments[i];
    }
    return `suma de los argumentos: ${ acum }`;
}

console.log(sumarTodos(10,12,14,50));


console.log('=========== Retorno de argumentos con ES6 ===========');

//Spread operator => operador de propagacion
/**
 * El operador de propagación spread operator permite que una expresión 
 * sea expandida en situaciones donde se esperan 
 * múltiples argumentos (llamadas a funciones) 
 * o 
 * múltiples elementos (arrays literales).
 * 
 * [...arguments]<= ... tres puntos
 * 
 * Expande los datos de un objeto
 * ..arguments <-- expande los datos de la misma forma que son enviados pero 
 *                  separados por comas 
 * [..arguments] <-- expande los datos pero en forma de arreglo
 */

 function restarTodos()
 {
    console.log(...arguments);
    console.log([...arguments]);

    //Recordar que 'reduce' es solamente para arrays
     //return arguments.reduce((a,b)=> a - b); <= error necesitamos propagar [...arguments]
    return `Resta de los argumentos enviados: ${[...arguments].reduce((a,b)=> a - b)}`;
 }


 console.log(restarTodos(4,8,24,10.4,123,)); //<-- con arguments no importa la cantidad de argumentos que enviemos


 /**Otros ejemplo de operador de propagacion */
function division(a,b)
{
    return a / b;
}

console.log(division(2,6));

let numeros = [5,35];
console.log(division(numeros)); //dara error NaN al querer dividir 5.35/undefined

//metodo opcion en es5 apply 
console.log(division.apply(undefined,numeros));

//en ES6 
console.log(division(...numeros)); //al propagar los envia de forma independiente


/**return es una funcionalidad de las funciones para retornar un valor o no. */
 function multiplacion(a,b)
 {
     // a = 100 > 120 true entonces retorn => nada
     if(a <= 120)
     {
        return;
     } 
     else
     {
        console.log(`${ a + b } Ojo con el acelerador.`)
     }
 }

 resultado = multiplacion(100,6);

 /**Parametros por defectos */
 console.log('=========== Parametros por Defecto en ES6 ===========');
 function parametroPorDefecto(a,b=4)
 {
     return a + b;
 }

 console.log(parametroPorDefecto(1));

 console.log('=========== Parametros REST ===========');
 /**Parametros rest 
  * es muy parecido al spread operator (operador de propagacion) <-- mas usado en ES5
  * Rest permite que la funcion tome cuantos parametros quiera(enviemos)
    como un arreglo.
  * */

 function capturarTodos(...valores) 
 {
     //Operacion que deseamos
    return valores.reduce((a,b)=>a + b);
 }

 console.log(capturarTodos(34,56,10));

 /**Parametros obligatorios */
 function capturarOtrosValores(a,b,...depositos) 
 {
     //Operacion que deseamos
    if(a === 'usuario' && b === 'contraseña')
    {
        return `Monto Depositado: ${depositos.reduce((a,b)=>a + b)}`;   
    }else{
        return 'Usuario o contraseña incorrecta !';
    }
 }

 //la operacion comienza en el tercer paramentro entregado
 console.log(capturarOtrosValores('usuario','contraseña',34,56,10));

 //la operacion no se realiza 
 console.log(capturarOtrosValores(34,56,10));


 console.log('=========== Prioridad de las variables ===========');
/**Prioridad de las variables */
var num = 5;

function darNumero()
{
    //Descomenta para ver el comportamiento de la variable
    //var num = 10;
    
    num = 10;
    return num;
}

console.log(num);
console.log(darNumero());
console.log(num);




