//Metodos para recorrer un arreglo sin utilizar for

//Arreglo de objetos para el ejemplo
let estudiantes = [
    {
        nombre: 'Carlos',
        calificacion: 5
    },
    {
        nombre: 'Pedro',
        calificacion: 4
    },
    {
        nombre: 'Luis',
        calificacion: 7
    },
    {
        nombre: 'Alejandro',
        calificacion: 5
    },
    {
        nombre: 'Angel',
        calificacion: 3
    },
    {
        nombre: 'Victor',
        calificacion: 4
    },
];

let numeros = [1,4,6,8,45,31];

//Forma tradicional para acceder a aun elemento del arrglo
//Ejemplo Tradicional 1
console.log('=============== Ejemplo Tradicional 1 ===============');
console.log(estudiantes[0].nombre);
console.log(estudiantes[1].nombre);

//Ejemplo Tradicional 2
console.log('=============== Ejemplo Tradicional 2 ===============');
for (let iterator of estudiantes) {
    console.log(iterator.nombre);
}

//Ejemplo Tradicional 3
console.log('=============== Ejemplo Tradicional 3 ===============');
for(let i=0;i < estudiantes.length;i++)
{
    console.log(estudiantes[i].nombre);
}

//Ejemplo Tradicional 4
console.log('=============== Ejemplo Tradicional 4 ===============');
let estudiantesNombre = [];
for (let nombres of estudiantes) {
    estudiantesNombre.push(nombres.nombre);
}
console.log(estudiantesNombre);

//map(call back)
/**
 * Transforma cada elemento del Array segun el Callback y devuelve un nuevo Array
 * El método map() crea un nuevo array con los resultados de la llamada a la función
 * indicada aplicados a cada uno de sus elementos.
 */
console.log('=============== MAP ===============');
let nombresEstudiantes = [];
nombresEstudiantes = estudiantes.map( estudiantes => estudiantes.nombre);
console.log(nombresEstudiantes);
console.log('=============== Aplicar la raiz cuadrada ===============');

let raizNumeros = numeros.map(Math.sqrt);
console.log(numeros);
console.log(raizNumeros);

console.log("============== Aplicar una funcionar ==============");
let dobleNumero = numeros.map(function(num){
    return num * 2;
});
console.log(numeros);
console.log(dobleNumero);

console.log("============== uso generico de map ==============");
let map = Array.prototype.map;

let valores = map.call('Hello World', function(char) 
    {
         return char.charCodeAt(0); 
    });
 console.log(valores);   

 console.log("============== uso generico de map con querySelectorAll==============");
 /**Este ejemplo muestra como iterar sobre una colección de objetos obtenidos por querySelectorAll. 
  * En este caso obtenemos todas las opciones seleccionadas en pantalla y se imprimen en la consola: */
        // var elems = document.querySelectorAll('select option:checked');
        // var values = [].map.call(elems, function(obj) {
        //   return obj.value;
        // });
// console.log(values);

console.log("(========== Usando map para invertir una cadena ==============");
let cadena = '12345';
let newCadena = [].map.call(cadena, function(x){
    return x;
}).reverse().join('');
console.log(newCadena);


console.log('=============== FILTER ===============');
//filter(call back)
//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
let estudiantesAprobados = estudiantes.filter(estudiantes => estudiantes.calificacion > 4);
console.log(estudiantesAprobados);

console.log("==== Filtrando todos los valores pequeños =====");
//El siguiente ejemplo usa filter() para crear un arreglo filtrado que excluye todos los elementos con valores inferiores a 10.
function comprobarValoresGrandes(elemento)
{
    return elemento >= 10;
}

let filtrados = [12,5,8,120,31].filter(comprobarValoresGrandes);
console.log(filtrados);



console.log('=============== FILTER Y MAP ===============');
let estuadiantesAprobadosNombres = estudiantesAprobados.map(estudiantesAprobados => estudiantesAprobados.nombre);
console.log(estuadiantesAprobadosNombres);




console.log('=============== REDUCE ===============');
/**
 * El método reduce() aplica una función a un acumulador y a cada valor 
 * de un array (de izquierda a derecha) para reducirlo a un único valor.
 */

 //para este ejemplo copiaremos el objeto numeros
let newNumeros = numeros.slice();

let suma = newNumeros.reduce( (a,b) => a + b);
console.log(newNumeros)
console.log('Suma: ' + suma);

let mayor = newNumeros.reduce((a,b) => a > b ? a:b );
console.log('Mayor: ' + mayor);

//Obtener promedio sin user un bucle , 
//En este ejemplo se hace el uso de reduce ya que necesitamos solo un valor de retorno, que es el promedio

let promedio = numeros.reduce(
    (a,b,i,arr) => 
    {
        b +=a;
        return i == arr.length -1 ? Math.round(b / arr.length) : b;
    }
);

console.log(`Promedio: ${ promedio}`);

//En este ejemplo necesitamos mostrar el alumno , con la mejor calificacion
//Se utiliza reduce ya que en este caso nos retornara un objeto del cual utilizaremos sus propiedades
let mejorEstudiante = estudiantes.reduce(
        (a,b)=>   
            {
                if(a.calificacion > b.calificacion){
                     return{
                         nombre: a.nombre,
                         calificacion: a.calificacion   
                     }
                 }else{
                     return{
                         nombre: b.nombre,
                         calificacion: b.calificacion
                     }
                 }
            }
);
            
console.log(mejorEstudiante);

