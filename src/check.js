export default function checkToDo(todo) {
  const todos = JSON.parse(localStorage.getItem('toDoList'));
  const todoIndex = parseInt(todo.parentNode.querySelector('.index').innerHTML, 10);
  todos[todoIndex].completed = !todos[todoIndex].completed;

  localStorage.setItem('toDoList', JSON.stringify(todos));
}
document.addEventListener('DOMContentLoaded', () => {
const list = document.getElementById('to_do_list');

list.addEventListener('change', (e) => {
  const item = e.target;
  if (item.classList[0] === 'checkbox-input') {
    const item2 = item.parentElement;
    item2.classList.toggle('completed-task');
    checkToDo(item2);
  }
});
});


