/**Scope
 *  es el ambito o el contexto donde se ejecuta una funcion y
 *  existen sus variables*/


 /*Scope Global*/
 var hola;

 function holaMundo()
 {
     hola = 'Hola Mundo';
     return hola;
 }

 console.log(holaMundo());

/**Scope Localr*/
//  function holaMundoAgain()
//  {
//      let holaAgain = 'Hola Mundo Again';
//      return holaAgain;
//  }

//  console.log(holaMundoAgain());
//  console.log(holaAgain); //<-- Dara error al no esta estar definida como variable global

 /**Cada function genera un scope y cada bloque tambien en ES6 */
/**Esta es la definicion de bloque  */
 {
     let adios;
    //  var adios; <-- Descomentar para ver la deferencia de let y var dentro de una funcion o bloque
     adios = "Bye bye...";
 }

//  console.log(adios); 

 /**Ejemplo en funciones que retornan otra funcion */
function sumar(a)
{
    return function(b)
    {
        return a + b; //<-- (a) es acceder al scope que esta fuera de la funcion 
    }
}
//Recordar que cuando enviamos valores con retorno debemos asignar la declaracion a una variable
let miSuma =  sumar(10)(5);
console.log(miSuma);

/**Las funciones que estan dentro de otra pueden acceder al scope que esta por fuera de ellas */






