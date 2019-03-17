class Task{
    constructor(name){
        this.name = name;
        this.isComplete = false;
    }

    complete(){
        this.isComplete = !this.isComplete; 
    }
}

class TasksList{
    constructor(name){
        this.name =  name;
        this.tasks = [];
    }

    addTask(task,element){
        this.tasks.push(task);
        this.renderTasks(element);
    }

    removeTask(i,element){
        this.tasks.splice(i,1);
        this.renderTasks(element);
    }

    renderTasks(element){
        let tasks = this.tasks.map( task => `
            <li class="task ${task.isComplete ? 'complete':''}">
                <input type="checkbox" 
                class="task__complete-button"
                ${task.isComplete ? 'checked':''}
                >
                <span class="task__name">${ task.name }</span>
                <a href="#" class="task__remove-button">X</a>
            </li>
        `);
        element.innerHTML = tasks.reduce((a,b) => a + b, '');
    }
}

const addTaskElement = document.getElementById('add-task');
const taskContainerElement = document.getElementById('tasks-container');
const inbox = new TasksList('inbox');

function addDOMTask(event, list = inbox ) {
    //Obtener el texto del imput
    if(event.key === 'Enter'){
       //Crear la tarea instanciando a la clase
       let task = new Task(this.value);
       //Añadir la tarea a la lista
       list.addTask(task,taskContainerElement);
       //Borrar el texto del imput
       this.value='';

     }
}

addTaskElement.addEventListener('keyup',addDOMTask);


//Eliminar la tarea desde el DOM
function getTaskIndex(event){
         //remover tarea de la lista, (se necesita el indice)
         let taskItem = event.target.parentElement,
         tasksItems = [...taskContainerElement.querySelectorAll('li')];
         //retornamos el indice
         return tasksItems.indexOf(taskItem); 
}

//Obtener el indice de la tarea
function removeDOMTask(event, list = inbox){
    //detectar que se hizo click en el enlace 
    if(event.target.tagName === 'A'){
      list.removeTask(getTaskIndex(event),taskContainerElement);
    }
}

taskContainerElement.addEventListener('click',removeDOMTask );
 
// Completar la tarea
function completeDOMTask(event, list = inbox){
    //detectar que se hizo click en el INPUT 
    if(event.target.tagName === 'INPUT'){
        //completar la lista de tarea (se neceita el indece)
      list.tasks[getTaskIndex(event)].complete();
      event.target.parentElement.classList.toggle('complete');
      console.table(list.tasks);
    }
}

taskContainerElement.addEventListener('click',completeDOMTask );

console.table(inbox.tasks);