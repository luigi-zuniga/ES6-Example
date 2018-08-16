let names = ['Alvaro','Juan','Camila','Cintia','Daniel'];
let opc;

//Bucle for
//Break y continue
for(let i=0;i < names.length ;i++)
{
    if(names[i].toUpperCase().indexOf('C') == 0)
    {
        continue;
    }
    console.log(names[i]);
}


//While
let i = 1;
while(i < 10)
{
    console.log(i);
    i++;
}

//Do While
//let pass = 'LZ';
//do{
    //pass = prompt('Ingrese su contraseña');
    //mientras pass no sea igual a LZ
    //Seguira pidiendo el pass
   //}while(pass != 'LZ');


   //For of (ES6) recorre arrglos y objetos. tambien recorre elementos del dom
   let nombres = 'luis'; // <-- string
   let namesCountry = ['Chile','España','Egipto','UK','Japon'];

for (let valor of nombres) {
    console.log(valor);
}

//ejemplo en DOM
let links = document.links; // <-- nos devuelve todos lo link

for (let link of links) {
    //no mas jquery
    link.style.color = 'red';
}