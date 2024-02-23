let todos = [];
let inputvalue = '';

function handleInputValue(event) {
    inputvalue = event.target.value;
}

function handleAddTodo() {
    todos.push(inputvalue);
    renderTodoList();
    inputvalue = '';
}

function handleDeleteTodo(index) {
    todos = todos.filter((_, i) => i !== index);
    renderTodoList();
}

function renderTodoList() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.className = 'text-xl';
      

      const completeCheckbox = document.createElement('input');
      completeCheckbox.type = 'checkbox';
      completeCheckbox.className = 'complete-checkbox';
      completeCheckbox.addEventListener('change', () => handleCompleteTask(index));
  
      li.appendChild(completeCheckbox);
      

      const taskText = document.createElement('span');
      taskText.innerText = `${todo} `;
      li.appendChild(taskText);
  

      const deleteButton = document.createElement('span');
      deleteButton.className = 'delete-button'; 
      deleteButton.innerHTML = '<img src = "https://t3.ftcdn.net/jpg/02/53/59/50/360_F_253595052_X69nEbLg6VanlCov7KKdjfogJHmrRwAo.jpg" width = "60%">';
      deleteButton.onclick = () => handleDeleteTodo(index);
  
      li.appendChild(deleteButton);
      todoList.appendChild(li);
    });
  }
