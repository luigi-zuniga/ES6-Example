//#region  Clase con el nombre de la tarea
class Task
{
    constructor(name)
    {
        this.name = name;
        /*parametro opcional, al cambiar la tarea pasa a true*/
        this.isComplete = false;
    }

    complete()
    {
        //Cambia el estado de la tarea. opcional: tambien se podria crear otro metodo uncomplete.
        //creamos una negacion, donde el valor sera el opuesto al que ya tenia
        this.isComplete = !this.isComplete; 
    }
}
//#endregion
//#region Clase con con la lista de tareas, que son enviadas de la clase Task

class TasksList
{
    constructor(name)
    {
        this.name =  name;
        //Propiedad task para contener las tareas
        this.tasks = [];
    }

    //Necesita 2 parametros  task y element
    addTask(task,element)
    {
        this.tasks.push(task);
        this.renderTask(element);
    }

    removeTask(i,element)
    {
        this.tasks.splice(i,1);
        this.renderTask(element);
    }

    renderTasks(element)
    {
        //map recoge cada elemento de un arreglo y hace una transformacion y los devuelve en un nuevo arreglo
        let tasks = this.tasks.map( tasks => `
            <li class="taks">
                <input type="checkbox" class="task__complete-button">
                <span class="task__name">${ tasks.name } </span>
                <a href="#" class="task__remove-button">X</a>
            </li>
        `);

        //reduce lo que hace es que apartir de un arreglo , es devolver un solo elemento
        //se le añade una suma para concatenar un elemento al lado del otro
        element.innerHTML = taks.reduce(a,b => a + b);
    }

}
//#endregion

//Trabajar con el DOM
//Element se refiere a un elemento HTML, mas que nada una convencion
/**Tomamos los elementos del documento con los id que referenciamos para guardarlos en constantes */
const addTaskElement = document.getElementById('add-task');
const taskContainerElement = document.getElementById('tasks-container');

//Instanciamos la clase TasksList
const inbox = new TasksList('inbox');

//Metodo para añadir tarea desde el DOM (Documento HTML)
//a la funcion le pasamos 2 parametros 
//el evento y la lista que podefecto sera la que contiene inbox
function addDOMTask(event, list = inbox ) //event, list = inbox
{
    console.log(event.key);
    //1 - Obtener el texto del input
    //2 - Crear la tarea instanciando la clase
    //3 - Añadir la tarea a la lista
    if(event.key === 'Enter')
     {
        //Al presionar enter instanciamos la clase task
       //this.value : es el elemento del input (trae el elemento con su valor)
       let task = new Task(this.value);
       list.addTask(task,taskContainerElement);

     }
}
//addEventListener: Escuchador de eventos, 
//con esto el navegador estara atento cuando un evento ocurra, si es asi algo debera suceder

//evento Keyup:soltar la tecla
addTaskElement.addEventListener('keyup',addDOMTask);
