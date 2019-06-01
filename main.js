var taskTitleInput = document.querySelector('.form__inputTitle');
var taskListInput = document.querySelector('.div__inputAddTask');
var makeTaskBtn = document.querySelector('.form__btnsAddTask');
var clearBtn = document.querySelector('.form__btnsClear');
var addBtn = document.querySelector('.div__btnAddTask')

taskTitleInput.addEventListener('keyup', enableMCABtns);
taskListInput.addEventListener('keyup', enableMCABtns);
makeTaskBtn.addEventListener('click',)

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

function createTaskItem() {

}
