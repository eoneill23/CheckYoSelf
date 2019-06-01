var taskItems = [];
var taskTitleInput = document.querySelector('.form__inputTitle');
var taskListInput = document.querySelector('.div__inputAddTask');
var makeTaskBtn = document.querySelector('.form__btnsAddTask');
var clearBtn = document.querySelector('.form__btnsClear');
var addBtn = document.querySelector('.div__btnAddTask');
var taskListItems = document.querySelector('.form__ul');
var taskListUl = document.querySelector('.form__ul')

taskTitleInput.addEventListener('keyup', enableMCABtns);
taskListInput.addEventListener('keyup', enableMCABtns);
addBtn.addEventListener('click', createTaskItem)

function enableMCABtns() {
  makeTaskBtn.disabled = false;
  clearBtn.disabled = false;
  addBtn.disabled = false;
  disableMCABtns();
}

function disableMCABtns() {
  if (taskTitleInput.value === '' && taskListInput.value === '') {
  makeTaskBtn.disabled = true;
  clearBtn.disabled = true;
  addBtn.disabled = true;
  }
}

function createTaskItem(event) {
  event.preventDefault();
  var taskId = Date.now();
  var taskItem = `
    <li>
    <img src="images/delete.svg" class="form__liImg" id="${taskId}">${taskListInput.value}
    </li>`
  taskListUl.innerHTML += taskItem;
}
