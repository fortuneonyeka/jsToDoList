/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const toDoList = [
  {
    description: 'Complete webpack excercise',
    completed: false,
    index: 0,
  },
  {
    description: 'Setup to do project',
    completed: false,
    index: 1,
  },
  {
    description: 'Submit a code review',
    completed: false,
    index: 2,
  },
]

function renderList() {
  const list = document.getElementById('to_do_list');
  list.innerHTML = '';
  toDoList.forEach((e) => {
    list.innerHTML += `<li class="list_container">
    <div class="checkbox_container">
      <input type="checkbox">
      <p>${e.description}</p>
    </div>
    <i class="fas fa-ellipsis-v"></i>
  </li>`;
  })
}