/* eslint-disable import/no-extraneous-dependencies */
import './style.css';
import './check';


const input = document.querySelector(".to_do_input")
const addBtn = document.querySelector(".submit_btn")
const list = document.getElementById('to_do_list');

let toDoList = [];


function renderList() {
  list.innerHTML = '';
  
  toDoList.forEach((toDo) => {
    list.innerHTML += `
    <li class="list_container">
    <div class="checkbox_container ${toDo.completed? 'completed-task' : ''}">
      <input type="checkbox" class="checkbox_input" ${toDo.completed? 'checked': ''}>
      <p>${toDo.description}</p>
    </div>
    <i class="fas fa-ellipsis-v"></i>
  </li>`;
  });
}


