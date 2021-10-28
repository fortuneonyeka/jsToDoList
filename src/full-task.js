import './check.js';

let toDoList = [];

if (localStorage.toDoList !== undefined) {
  toDoList = JSON.parse(localStorage.toDoList);
}

const input = document.querySelector('.to_do_input');
const addBtn = document.querySelector('.submit_btn');
const list = document.getElementById('to_do_list');
const clearAll = document.querySelector('.clear_all');




// Function
function renderList() {
  toDoList.forEach((todo) => {
  const newTodo = document.createElement('li');
  newTodo.classList.add('task-container');
  list.appendChild(newTodo);

  //span hidden index
  const index = document.createElement('span');
  index.classList.add('hidden');
  index.classList.add('index');
  index.innerHTML = todo.index;
  newTodo.appendChild(index);
  

  //div.checkbox-description-container
  const checkDiv = document.createElement('div');
  checkDiv.classList.add('checkbox-description-container');
  newTodo.appendChild(checkDiv);

  //input-checkbox
  const checkbox = document.createElement('input');
  checkbox.classList.add('checkbox-input');
  checkbox.type = 'checkbox';
  checkbox.checked = `${todo.completed ? 'true' : ''}`;
  checkDiv.appendChild(checkbox);

  //input description
  const iDescription = document.createElement('input')
  iDescription.classList.add(`description-${todo.index}`);
  iDescription.value = todo.description;
  iDescription.classList.add('edit-input');
  iDescription.classList.add(`${todo.completed ? 'completed-task' : 'checkbox-description-container'}`);
  
  checkDiv.appendChild(iDescription);
  console.log(iDescription);

  // iDescription.addEventListener('keydown', (e) => {
  //   const newDescription = iDescription.value;
  //   if (e.key == 13) {
  //     const oldToDo = JSON.parse(localStorage.toDoList);
  //     oldToDo[todo.index].description = newDescription;
  //     localStorage.setItem('toDoList', JSON.stringify(oldToDo))
  //   }
  // });

  //buttons container
  const buttonsDiv = document.createElement('div')
  buttonsDiv.classList.add('show')
  newTodo.appendChild(buttonsDiv)

  //button-edit container
  const editButtonDiv = document.createElement('div')
  editButtonDiv.setAttribute('id', `edit-buttons-${todo.index}`);
  editButtonDiv.classList.add('hidden');
  editButtonDiv.classList.add(`buttons-container-${todo.index}`);
  buttonsDiv.appendChild(editButtonDiv)

  //delet button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'
  

  deleteButton.addEventListener('click', function(){
console.log('clicked');
    deleteToDo(todo.index)
  })
  

  editButtonDiv.appendChild(deleteButton)

  //menu button (ellipsis)
  const menuButton = document.createElement('button');
  menuButton.classList.add(`move-button-${todo.index}`)
  menuButton.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
  buttonsDiv.appendChild(menuButton)

  menuButton.addEventListener('click', function() {
    showButtons(todo.index)
  })
  
})
}
