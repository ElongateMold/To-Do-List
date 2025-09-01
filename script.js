const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Escucha el evento al hacer clic en el botón agregar
addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    validateText(taskText);
});

// Toma el valor del input al presionar Enter
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const taskText = taskInput.value.trim();
        validateText(taskText);
    }
});

// Revisa que el input no esté vacío
function validateText(taskText) {
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
}

// Agrega la tarea a la lista
function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task'); //Crea una tarea con la clase task

    const completedButton = document.createElement('button');
    completedButton.classList.add('completeButton');
    completedButton.innerHTML = '<span class="material-symbols-outlined">check_box_outline_blank</span>';
    
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.innerHTML = '<span class="material-symbols-outlined">delete</span>';


    // Elimina la tarea al hacer clic en el botón "eliminar"
    deleteButton.addEventListener('click', () => {
        taskItem.classList.add('fade-out');
        setTimeout(() => {
            taskItem.remove();
        }, 300); // Espera a que termine la animación antes de eliminar
    });
    // Marca la tarea como completada al hacer clic en ella
    completedButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
        completedButton.innerHTML = taskItem.classList.contains('completed') ? '<span class="material-symbols-outlined">check_box</span>' : '<span class="material-symbols-outlined">check_box_outline_blank</span>';
    });
    // Agrega los elementos al DOM
    taskItem.appendChild(completedButton);
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}

