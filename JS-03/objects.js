//Objetos en javascript

let yo = 
{
    nomb: 'Luigi',
    edad: 28,
    sexo: true,
    pais: 'Chile',
    regionProvincia: ['Metropilitana','Estacion Central'],
    saludar()
    {
        return 'Esto es un Objeto en Javscript';
    }
};

console.log('=============== Objeto y sus propiedades ===============');
console.log(yo);
console.log(`Nombre: ${ yo.nomb } \nRegión: ${yo.regionProvincia[0]}`);

//Al utilizar const podemos añadir una nueva propiedad,
const yoConst = 
{
    nomb: 'Luigi',
    edad: 28,
    sexo: true,
    pais: 'Chile',
    regionProvincia: ['Metropilitana','Estacion Central']
}
yoConst.email = false;
console.log(yoConst.email);


//Operadores
/**
 * Delete --> Elimina una propiedad 
 * in : devuelve TRUE si existe una propiedad en el Objeto o en la cadena de prototipo
 */
console.log('=============== Delete - elimina una pripedad ===============');
 delete yo.sexo;
 console.log(yo);
 console.log('=============== in - Comprueba si existe una propiedad ===============');
 console.log('saludar' in yo);

 //El problema de IN es que si creamos una propiedad en el prototipo, nos dara true 
 //,indicando que si existe como propiedad en el objeto yo.
 Object.prototype.numeroMagico = 28;
 console.log('numeroMagico' in yo)
 console.log(yo.numeroMagico)


 //Para saber si una propiedad realmente existe en el objeto necesitamos el siguiente metodo
 console.log(yo.hasOwnProperty('numeroMagico')); //Retornara False , ya que realmente no es una propiedad del objeto

//Cadena de prototipos
//Es cuando un clase esta heredando metodos de otra clase u otrs hasta llegar a la clase mas alta de uno al otro.


console.log('=============== ES6 - Copiar un Objeto ===============');
//ES6 Copiar un Objeto, esto nos permite asignar operaciones sobre cada uno sin estar unidos
let ObTwo = Object.assign({},yo);
console.log(ObTwo);

//Asignar Variables existentes a propiedades de un objeto
console.log('=============== ES6 - variables y objetos ===============');
let newNombre = 'Alberto';
console.log(yo);
yo = 
{
    nomb: newNombre
}
console.log(yo);

//Expresiones en propiedades
let saludo = 'Buenas Tardes';

let myNewObject = 
{
    [saludo + newNombre]: 'Buenas Tardes, Alberto'
}

console.log(myNewObject);

