/**This => Devuelve un Objeto
 * este apunta a un objeto
 */
let myObj = 
{
    nombre : 'Luigi',
    saludar()
    {
        console.log(`Hola ${ this.nombre }`);
        /**This es equivalente devolver el objeto */
        console.log(`Hola ${ myObj.nombre }`);
        
    }
}

myObj.saludar();

/**El Objeto Global es el objeto del cual nacen todos los objetos */

function checkThis()
{
    console.log(this);
}

checkThis();

/*Lexical This*/

/**Ejemplo con variable intermedia que hace refernecia a this en ES5 */
function Boy(edad)
{
    this.edad = 0;
    let _t = this;
    setInterval(function(){
     _t.edad++;   
     if(_t.edad == 10)
     {
        alert('Lexical This ES5');
     }
    },1000);

}

//Mismo ejemplo con arrow function de ES6
function mensaje(cont)
{
    this.cont = 0;
    setInterval(() => { this.cont++;if (this.cont == 3) { alert('Lexical This ES6')} },1000)
}

let theboy = new Boy(); //Para poder acceder al contructor devemos de instanciarlo
let miMensaje = new mensaje();
