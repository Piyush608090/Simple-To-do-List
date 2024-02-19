// Create an empty array to store the to-do list items
const todos = [];

// Get the HTML elements we need
const todoList = document.querySelector('#todo-list');
const taskCount = document.querySelector('#task-count');
const newTaskInput = document.querySelector('#new-task');
const addTaskButton = document.querySelector('#add-task-button');

// Add an event listener to the add task button
addTaskButton.addEventListener('click', () => {

    // Get the value of the new task input
   const newTask = newTaskInput.value;

  // Add the new task to the to-do list array
  todos.push({
    task: newTask,
    completed: false,
  });

  // Clear the new task input
  newTaskInput.value = '';

  // Update the task count
  taskCount.textContent = todos.length;

  // Render the to-do list
  renderTodoList();
});

// Render the to-do list
function renderTodoList() {
  // Clear the to-do list element
  todoList.innerHTML = '';
  // Loop through the to-do list items and create a list item for each one
  todos.forEach((todo) => {
    const listItem = document.createElement('div');
    listItem.classList.add("div-task");
    listItem.textContent = todo.task;

    // Add a checkbox to the list item
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    // Add an event listener to the checkbox
    checkbox.addEventListener('change', () => { 
      // Update the completed property of the to-do item
      todo.completed = checkbox.checked;

      // Update the task count
      taskCount.textContent = todos.filter((t) => !t.completed).length;

      // Render the to-do list
      renderTodoList();
    });

    // Add a delete button to the list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add("delete-list")

    // Add an event listener to the delete button
    deleteButton.addEventListener('click', () => {
      // Remove the to-do item from the array
      todos.splice(todos.indexOf(todo), 1);

      // Update the task count
      taskCount.textContent = todos.length;

      // Render the to-do list
      renderTodoList();
    });

    // Add the checkbox and delete button to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(deleteButton);

    // Add the list item to the to-do list element
    todoList.appendChild(listItem);
  });
}

// Render the to-do list initially
renderTodoList();