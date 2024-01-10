const taskInput = document.getElementById('taskInput');
const tasksContainer = document.getElementById('tasks');
const completedTasksContainer = document.getElementById('completedTasks');


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];

function renderTasks() {
    tasksContainer.innerHTML = '';
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.textContent = task;
        taskElement.addEventListener('click', () => completeTask(task));
        tasksContainer.appendChild(taskElement);
    });
}

function renderCompletedTasks() {
    completedTasksContainer.innerHTML = '';
    completedTasks.forEach(task => {
        const completedTaskElement = document.createElement('div');
        completedTaskElement.textContent = task;
        completedTasksContainer.appendChild(completedTaskElement);
    });
}

function addTask() {
    const newTask = taskInput.value.trim();
    if (newTask !== '') {
        tasks.push(newTask);
        taskInput.value = '';
        renderTasks();
        saveToLocalStorage();
    }
}

function completeTask(task) {
    const taskIndex = tasks.indexOf(task);
    if (taskIndex !== -1) {
        completedTasks.push(task);
        tasks.splice(taskIndex, 1);
        renderTasks();
        renderCompletedTasks();
        saveToLocalStorage();
    }
}

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
}

renderTasks();
renderCompletedTasks();
