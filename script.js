document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var todoInput = document.getElementById('todo-input');
    var todoList = document.getElementById('todo-list');

    if (todoInput.value !== '') {
      var newTodo = document.createElement('li');
      newTodo.innerHTML = todoInput.value + '<button class="delete-button">Delete</button>';
      todoList.appendChild(newTodo);
      todoInput.value = '';

      var deleteButtons = document.getElementsByClassName('delete-button');
      for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', function() {
          this.parentElement.remove();
        });
      }
    }
  });