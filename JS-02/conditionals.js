//Valores Truthy y Falsy: son valores que no son Boolean pero que equivalen a tal.

//Truthy: String no vacios ,[],{}, Numeros diferentes de 0
//Falsy: 0, string vacio, null, NaN, undefined

let edad;

if(edad)
{
    console.log("El valor es truthy");
}else
{
    console.log("EL valor es falsy");
}

//Switch
//Compara un valor sobre distintos casos posibles.
//switch suele utilizar cuando ya poseemos opciones definidas
let color = prompt (`Selecciona un color:
    1 - Rojo
    2 - Amarillo
    3 - Azul   
`);

switch (color) {
         case '1':
            console.log('Elegiste Rojo');
        break;

        case '2':
            console.log('Elegiste Amarillo');
        break;

        case '3':
            console.log('Elegiste Azul');
        break;
    default:
        console.log('Opcion Incorrecta');
        break;
}

//Operador Ternario

let nombre = prompt("Escribe tu nombre:");
nombre.length > 5 ? console.log("Tu nombre es largo"):console.log("Tu nombre es corto"); 