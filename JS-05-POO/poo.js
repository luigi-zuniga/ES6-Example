/**
 *  Clase => plantilla a partir de la cual se crea un Objeto
 *  Instancia => es cada Objeto creado a partir de una Clase
 *  Constructor => funcion que se ejecuta automaticamente al instancia una clase
 * 
 *  Propiedad => valores
 *  metodos => function
 */ 

console.log('=============   Construrtor ES5   =============');
 /*Creacion de un contructor estos comienzan en mayusculas en ES6*/
var Profesor = function(nombre,edad,pais)
{
    this.nombre = nombre;
    this.edad = edad;
    this.pais = pais;
}


//La instancia comienza en mayuscula debido a que es la llamada a un constructor
let persona001 = new Profesor('Pedro',33,'Chile'); 
let persona002 = new Profesor('Alvaro',37,'Peru');

console.log(persona001);
console.log(persona002);

let string = new String('Hola Mundo');
let stringDos = 'Hola Mundo otra vez';

console.log(string);
console.log(stringDos);


/** En ES6 aparece el concepto de Clases pero es (Sugar sintaxis) solo tienen una forma mas facil de escribir , pero realmente son funciones como en ES5*/
console.log('=============   Clases en ES6   =============');

 class Persona
 {
    constructor(nombre,apellido,edad,sexo,pais)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.pais = pais;
        this.NombreCompleto = `${nombre} ${apellido}`;
   }   
    saludar()
    {
        return `Datos : ${ this.NombreCompleto } edad ${ this.edad }`;
    }

    static describirPersona(persona)
    {
        return `Esta persona se llama ${ persona.NombreCompleto } y es de ${ persona.pais }`;
    }
 }

 let francesca = new Persona('Francesca','Gonzalez',21,'Femenino','Chile');
 console.log(francesca.saludar());


 
 /** HERENCIA */
 console.log('=============   HERENCIA ES6   =============');
 class Laboratorista extends Persona
 {
     constructor(nombre,apellido,edad,semestre,jornada)
     {
         super(nombre,apellido,edad); // <-- para indicar que se reutilizaran estas propiedades en la herencia
         this.semestre = semestre;
         this.jornada = jornada;
     }

     datosLaboratorista()
     {
        return `Alumno : ${ this.NombreCompleto } \nEdad : ${  this.edad }\nSemestre : ${ this.semestre }\nJornada : ${ this.jornada }`;
     }
 }


let estudiante001 = new Laboratorista('Francisca','Gonzalez',21,5,'Diurna');
console.log(estudiante001.datosLaboratorista());


console.log('=============   Metodos estaticos ES6   =============');
/** Metodos Estaticos
 * Son aquellos que no requieren una instancia, bien se pueden utilizar para realizar operaciones o libreria con
 * funcionalidades que usemos constantemente solo con llamando al metodo.
*/
console.log(Persona.describirPersona(francesca)); // <-- notese que este no esta instanciado


Persona.prototype.metodoEstatico = 'Ups!, Esto es un metodo estatico';

console.log(francesca.metodoEstatico);
