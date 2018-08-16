//Arreglos y Metodos

let arry = [1,2,3,4,5,true,6];
let arryTwo = [1,2,3,4,'true',5,6];
let arryThree = [1,'2',3,4,'true',5,6];
let arryite = [12,24,31,47];

console.log(arry);
console.log(arryTwo);
console.log(arryThree);

let sumaArry = 0;
for(let i = 0;i < arry.length;i++)
{
    sumaArry += arry[i];
}

let sumaarryTwo = 0;
for (let index = 0; index < arryTwo.length; index++) {
    sumaarryTwo += arryTwo[index];
    
}

let sumaArryThree = 0;

for (let index = 0; index < arryThree.length; index++) {
    let element = arryThree[index];
    if(typeof element != 'number') continue; 
    sumaArryThree += arryThree[index];
}


console.log(sumaArry);
console.log(sumaarryTwo);
console.log(sumaArryThree);

//Creacion de la propiedad saludos como prototype
Array.prototype.saludoUno = 'Hello!';
Array.prototype.saludoDos = function(a,b){return (a + b);};


console.log(arry.saludoUno);
console.log(arry.saludoDos(1,4));

//IndexOf(): Nos sirve para saber la posicion de un elemento en el Array, como tambien para saber si este existe, dado que,
//           al no existir un elemento en la posicion nos retorna -1

console.log(`Existe en la posicion : ${ arryThree.indexOf(4)}`);
console.log(`No existe : ${ arryThree.indexOf('0')}`);


//Agregar elementos en un Array con:
//.push(el1,el2,el3) --> añade los elementos al final del Array
//.unshift(el1,el2,el3)--> añade los elementos al inicio del Array
console.log('=============== AGREGAR ELEMENTOS EN ARRAY ===============');
console.log(`longitud Original: ${arryThree.length}`);
console.log(arryThree);
let newLenght = arryThree.unshift('Javascript','desde','Cero');
console.log('=====================================');
console.log('agregamos : Javascript, desde, Cero');
console.log('=====================================');
console.log(arryThree);
console.log(`Nueva longitud: ${newLenght}`);


//Eliminar un solo elemento en el Arreglo (Sin paramentro)
//Estos metodos devuelven el elemento eliminado
//.pop() --> Al Final
//.shift()--> Al Principio
console.log('=============== ELIMINAR ELEMENTOS EN ARRAY ===============');
console.log(`longitud Original: ${arryThree}`);
console.log(arryThree);
let elementoFinal = arryThree.pop();
let elementoInicial = arryThree.shift();
console.log('Elemento final eliminado : ' + elementoFinal);
console.log('Elemento inicial eliminado : ' + elementoInicial)
console.log('Arreglo con elementos eliminados');
console.log(arryThree);
console.log('=====================================');


//Join(Separador)
//Devuelve los elementos de un Arreglo como string, por defecto join separa por comas
console.log('=============== PASAR ELEMENTOS A STRING ===============');
console.log(arryThree.join());
console.log(arryThree.join(' '));


//splice(a,b,items) Lo que hace es añadir o quitar elementos de un arreglo
//a = posicion del elemento en donde comienzara a eliminar o reemplazar
//b =  cantidad de elementos a eliminar o reemplazar desde la posicion indicada en a
//items = elementos que reemplazaran a los indicados en b

console.log('=============== AÑADIR Y QUITAR ELEMENTOS ===============');
arryThree.splice(2,4,'L','U','I','G','I');
console.log(arryThree);
console.log('=============== AÑADIR UN ELEMENTO SIN ELIMINAR OTRO ===============');
//si el segundo paramentro dado es 0 indicamos que no elimine nada
//aqui desde la posicion de 7 , elimine 0 elementos, y añada false
console.log(arryThree.splice(7,0,false));
let arregloDos = arryThree.splice(2,5);
console.log(arregloDos);


//Se recomienda usar Array.splice() <-- Para crear una copia del arreglo original

console.log('=============== ES6 - Metodo find && findIndex ===============');
//ES6 nuevos metodos
//find(cb);
let newArray = [1,2,3,4,5,6];
//posiciones
let num = newArray.find(element => element > 3);
//find() nos retorna el primer elementos que coincida con la busqueda
console.log(num);

//findIndex() retorna la posicion en el que s encuentra el elemento que conicide con la busqueda
let numIndexOf = newArray.findIndex(element => element > 3);
console.log(numIndexOf); 



console.log('=============== ES6 - Iteradores ===============');
//Iteradores
//Son objetos objetos que contienen el metodo next
//Ese metodo devuelve un objeto con dos propiedades
// Los iteradores poseen un metodo next
//Las porpiedades son: Value, Done;

//Elementos que devuelven un iterados
//.keys() , .values(), entries()

let iterador = arryite.keys();
let iteradorTwo = arryite.entries();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

console.log(iteradorTwo.next());
console.log(iteradorTwo.next());
console.log(iteradorTwo.next());
console.log(iteradorTwo.next());
console.log(iteradorTwo.next());





