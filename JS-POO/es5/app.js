'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//#region  Clase con el nombre de la tarea
var Task = function () {
    function Task(name) {
        _classCallCheck(this, Task);

        this.name = name;
        /*parametro opcional, al cambiar la tarea pasa a true*/
        this.isComplete = false;
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            //Cambia el estado de la tarea. opcional: tambien se podria crear otro metodo uncomplete.
            //creamos una negacion, donde el valor sera el opuesto al que ya tenia
            this.isComplete = !this.isComplete;
        }
    }]);

    return Task;
}();
//#endregion
//#region Clase con con la lista de tareas, que son enviadas de la clase Task

var TasksList = function () {
    function TasksList(name) {
        _classCallCheck(this, TasksList);

        this.name = name;
        //Propiedad task para contener las tareas
        this.tasks = [];
    }

    //Necesita 2 parametros  task y element


    _createClass(TasksList, [{
        key: 'addTask',
        value: function addTask(task, element) {
            this.tasks.push(task);
            this.renderTask(element);
        }
    }, {
        key: 'removeTask',
        value: function removeTask(i, element) {
            this.tasks.splice(i, 1);
            this.renderTask(element);
        }
    }, {
        key: 'renderTasks',
        value: function renderTasks(element) {
            //map recoge cada elemento de un arreglo y hace una transformacion y los devuelve en un nuevo arreglo
            var tasks = this.tasks.map(function (tasks) {
                return '\n            <li class="taks">\n                <input type="checkbox" class="task__complete-button">\n                <span class="task__name">' + tasks.name + ' </span>\n                <a href="#" class="task__remove-button">X</a>\n            </li>\n        ';
            });

            //reduce lo que hace es que apartir de un arreglo , es devolver un solo elemento
            //se le añade una suma para concatenar un elemento al lado del otro
            element.innerHTML = taks.reduce(a, function (b) {
                return a + b;
            });
        }
    }]);

    return TasksList;
}();
//#endregion

//Trabajar con el DOM
//Element se refiere a un elemento HTML, mas que nada una convencion
/**Tomamos los elementos del documento con los id que referenciamos para guardarlos en constantes */


var addTaskElement = document.getElementById('add-task');
var taskContainerElement = document.getElementById('tasks-container');

//Instanciamos la clase TasksList
var inbox = new TasksList('inbox');

//Metodo para añadir tarea desde el DOM (Documento HTML)
//a la funcion le pasamos 2 parametros 
//el evento y la lista que podefecto sera la que contiene inbox
function addDOMTask(event) //event, list = inbox
{
    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

    console.log(event.key);
    //1 - Obtener el texto del input
    //2 - Crear la tarea instanciando la clase
    //3 - Añadir la tarea a la lista
    if (event.key === 'Enter') {
        //Al presionar enter instanciamos la clase task
        //this.value : es el elemento del input (trae el elemento con su valor)
        var task = new Task(this.value);
        list.addTask(task, taskContainerElement);
    }
}
//addEventListener: Escuchador de eventos, 
//con esto el navegador estara atento cuando un evento ocurra, si es asi algo debera suceder

//evento Keyup:soltar la tecla
addTaskElement.addEventListener('keyup', addDOMTask);