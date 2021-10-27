export default function checkToDo(toDo) {
  const toDos = JSON.parse(localStorage.getItem('toDoList'));
  const toDoIndex = toDos.findIndex((item) => item.description === toDo.children[1].innerText);
  toDos[toDoIndex].completed = !toDos[toDoIndex].completed;

  localStorage.setItem('toDoList', JSON.stringify(toDos));
}

const list = document.getElementById('to_do_list');

list.addEventListener('change', (e) => {
  const item = e.target;
  if (item.classList[0] === 'checkbox_input') {
    const item2 = item.parentElement;
    item2.classList.toggle('completed-task');
    checkToDo(item2);
  }
});