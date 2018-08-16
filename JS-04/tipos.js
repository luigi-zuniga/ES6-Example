/**Tipos de Funciones */
/**
 * ========  EJEMPLOS PARA DIFERENCIAR LAS FUNCIONES  ============
 */

/**Funciones por definicion y por expresion */
function funcionPorDefinicion() //<-- Por definicion
{
    //Cuerpo de la Funcion 
}
funcionPorDefinicion(); // <-- Asi se ejecutan

//Una expresion es un codigo que tiene un valor
let funcionPorExpresion = function()
{
    //Cuerpo de la funcion
}

funcionPorExpresion(); // <-- Asi se ejecutan

let c = console.log; // <-- funcion por expresion
c('Hola Mundo'); // <-- funcion por definicion


/**============= Funcion por expresion =========================
* guardamos la expresion y luego simplemente la llamamos
*
*   let c = console.log; <-- se guarda la expresion de console.log
                                   para luego ser llamada

    c('Mensaje') <-- () = console.log('Mensaje')
    Enviamos el mensaje a una funcion definida
    equivalente a :

    funcionPorExpresion();
 ===============*/
/**
 * Metafora
 * una funcion es lo mas parecido a una receta
 * ya que en ella vienen todas la instrucciones para preparar un plato 
 * dada una serie de ingrediente(parametros)
 * 
 * Pero para poder preparar este menu necesitamos los ingredientes reales
 *  recete(papa,ajo) <- expresiones(ingredientes reales)
 * 
 * 
 */

 /**FUNCIONES NOMBRADAS Y ANONIMAS */
 let variable = function() //<--Funcion anonima , no lleva nombre
{
    //Cuerpo de la Funcion
}

function funcionPorDefinicion() //<-- Funcion nombradas, teniendo nombre pueden ser invocadas
{
    //Cuerpo de la Funcion
}

//CALLBACK: Es una funcion que es ejecutada por otra, luego de un proceso
// el siguiente es un ejemplo de como opera un callback



function eventoEscucha(password)
{
    return password == '123' ? 'Contraseña Correcta':'Error de contraseña';
    
}

let ejem = eventoEscucha('123',function(){
    let fecha = new Date();
    console.log(fecha);
}());

console.log(ejem);

/**
 * Funciones de Flecha (Arrow Function ES6)
 * Son funciones anonimas 
 * (param1,param2,param3) ==> valor de retorno
 */

 let suma = (a,b) => a + b;
 let miSuma = suma(4,9);
 c(miSuma);



 let cuadrado = (c) => 
 {
     if(typeof c == 'number')
     {
         return c * c;
     }
 }

 let miCuadrado = cuadrado(2);
 console.log(miCuadrado);



function mult(x)
{
    for(let i = 0;i < 10+1;i++)
    {
        console.log(x * i);
    }
}

 let division = (d) => 
 {
     if(typeof d == 'number' && d > 10)
     {
        return mult(d);
     }else{
        return `Número ${ d } es menor a 10`;
     }
 }

 let ejemplo = division(4);
 console.log(ejemplo);

 /**Retorno  de Objeto con Arrows Function
  * al igual que los ejemplos anteriores ,
  * recordar que una arrow function 
  * recibe los parametros y retorna el valor
  * 
  * (nomrePropiedad) => ({ValorDelaPropiedad})
 */
 let myObj = (nombre,edad) => ({nombre,edad});
 let myCustomObjt = myObj('Luigi',28);
console.log(myCustomObjt);


