/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import './style.css';
import './check.js';

let toDoList = [];
if (localStorage.toDoList !== undefined) {
  toDoList = JSON.parse(localStorage.toDoList);
}

const input = document.querySelector('.to_do_input');
const addBtn = document.querySelector('.submit_btn');
const list = document.getElementById('to_do_list');

function updateLocalStorage() {
  localStorage.toDoList = JSON.stringify(toDoList);
  return false;
}

function renderList() {
  list.innerHTML = '';

  toDoList.forEach((toDo) => {
    list.innerHTML += `
    <li class="list_container">
    <div class="checkbox_container ${toDo.completed ? 'completed-task' : ''}">
      <input type="checkbox" class="checkbox_input" ${toDo.completed ? 'checked' : ''}>
      <p>${toDo.description}</p>
    </div>
    <i class="fas fa-ellipsis-v"></i>
  </li>`;
  });
}

function addToDo(e) {
  if (input.value) {
    toDoList.push({
      description: input.value,
      completed: false,
      index: toDoList.length + 1,
    });
    list.innerHTML = '';
    renderList();
    updateLocalStorage();
    input.value = '';
  }
}

window.addEventListener('DOMContentLoaded', renderList);
addBtn.addEventListener('click', addToDo);
