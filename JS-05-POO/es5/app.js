'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task(name) {
        _classCallCheck(this, Task);

        this.name = name;
        this.isComplete = false;
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.isComplete = !this.isComplete;
        }
    }]);

    return Task;
}();

var TasksList = function () {
    function TasksList(name) {
        _classCallCheck(this, TasksList);

        this.name = name;
        this.tasks = [];
    }

    _createClass(TasksList, [{
        key: 'addTask',
        value: function addTask(task, element) {
            this.tasks.push(task);
            this.renderTasks(element);
        }
    }, {
        key: 'removeTask',
        value: function removeTask(i, element) {
            this.tasks.splice(i, 1);
            this.renderTasks(element);
        }
    }, {
        key: 'renderTasks',
        value: function renderTasks(element) {
            var tasks = this.tasks.map(function (task) {
                return '\n            <li class="task ' + (task.isComplete ? 'complete' : '') + '">\n                <input type="checkbox" \n                class="task__complete-button"\n                ' + (task.isComplete ? 'checked' : '') + '\n                >\n                <span class="task__name">' + task.name + '</span>\n                <a href="#" class="task__remove-button">X</a>\n            </li>\n        ';
            });
            element.innerHTML = tasks.reduce(function (a, b) {
                return a + b;
            }, '');
        }
    }]);

    return TasksList;
}();

var addTaskElement = document.getElementById('add-task');
var taskContainerElement = document.getElementById('tasks-container');
var inbox = new TasksList('inbox');

function addDOMTask(event) {
    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

    //Obtener el texto del imput
    if (event.key === 'Enter') {
        //Crear la tarea instanciando a la clase
        var task = new Task(this.value);
        //Añadir la tarea a la lista
        list.addTask(task, taskContainerElement);
        //Borrar el texto del imput
        this.value = '';
    }
}

addTaskElement.addEventListener('keyup', addDOMTask);

//Eliminar la tarea desde el DOM
function getTaskIndex(event) {
    //remover tarea de la lista, (se necesita el indice)
    var taskItem = event.target.parentElement,
        tasksItems = [].concat(_toConsumableArray(taskContainerElement.querySelectorAll('li')));
    //retornamos el indice
    return tasksItems.indexOf(taskItem);
}

//Obtener el indice de la tarea
function removeDOMTask(event) {
    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

    //detectar que se hizo click en el enlace 
    if (event.target.tagName === 'A') {
        list.removeTask(getTaskIndex(event), taskContainerElement);
    }
}

taskContainerElement.addEventListener('click', removeDOMTask);

// Completar la tarea
function completeDOMTask(event) {
    var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

    //detectar que se hizo click en el INPUT 
    if (event.target.tagName === 'INPUT') {
        //completar la lista de tarea (se neceita el indece)
        list.tasks[getTaskIndex(event)].complete();
        event.target.parentElement.classList.toggle('complete');
        console.table(list.tasks);
    }
}

taskContainerElement.addEventListener('click', completeDOMTask);

console.table(inbox.tasks);