var ToDos = JSON.parse(localStorage.getItem('ToDoListArray')) || [];
var taskTitleInput = document.querySelector('.form__inputTitle');
var taskListInput = document.querySelector('.div__inputAddTask');
var makeTaskBtn = document.querySelector('.form__btnsAddTask');
var clearBtn = document.querySelector('.form__btnsClear');
var addBtn = document.querySelector('.div__btnAddTask');
var taskListItems = document.querySelector('.form__ul');
var taskListUl = document.querySelector('.form__ul')
var mainContent = document.querySelector('.main')

taskTitleInput.addEventListener('keyup', enableMCABtns);
taskListInput.addEventListener('keyup', enableMCABtns);
addBtn.addEventListener('click', createTaskItem);
makeTaskBtn.addEventListener('click', handleMakeTaskList);
clearBtn.addEventListener('click', clearBtn);
mainContent.addEventListener('click', clickHandler);
window.addEventListener('load', mapLocalStorage(ToDos));

function mapLocalStorage(oldToDos) {
  var createNewToDos = oldToDos.map(function(object){
    return createToDoList(object);
  })
  ToDos = createNewToDos;
}

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

function clearBtn() {
  event.preventDefault();
  taskTitleInput.value = '';
  taskListInput.value = '';
//delete all cards from DOM and localStorage
}

function createTaskItem(event) {
  event.preventDefault();
  var taskId = Date.now();
  var taskItem = `
    <li class="form__li">
      <img src="images/delete.svg" class="form__liImg" id="${taskId}">${taskListInput.value}
    </li>`
  taskListUl.innerHTML += taskItem;
  taskListInput.value = '';
  addBtn.disabled = true;
}

function clearInputs() {
  taskTitleInput.value = '';
  taskListInput.value = '';
}

function createToDoList(obj) {
  var uniqueId = obj.id;
  var newTitle = obj.title;
  var urgentStatus = obj.urgent;
  var newTasks = obj.tasks;
  var newTodo = new ToDoList({
    id: uniqueId,
    title: newTitle,
    urgent: urgentStatus,
    tasks: newTasks
  })

  appendToDo(newTodo);
  return newTodo;
}

function handleMakeTaskList() {
  event.preventDefault();
  var newTodo = new ToDoList ({
    id: Date.now(),
    title: taskTitleInput.value,
    urgent: false,
    tasks: []
  });
  createToDoList(newTodo);
  ToDos.push(newTodo);
  newTodo.saveToStorage(ToDos);
  clearInputs();
  disableMCABtns();
}

function appendToDo(todo) {
  mainContent.insertAdjacentHTML('afterbegin', `<article class="main__article card" data-id="${todo.id}">
      <header class="card__header">
        <h3 class="card__headerTitle">${todo.title}</h3>
      </header>
      <main class="card__main">
        <div class="card__mainDiv">
          <img class="card__mainImg" src="images/checkbox.svg" alt="Click here to check off this task!">
          <p class="card__mainPara">Task list items go here.</p>
        </div>
        <div class="card__mainDiv">
          <img class="card__mainImg" src="images/checkbox.svg" alt="Click here to check off this task!">
          <p class="card__mainPara">Task list items go here.</p>
        </div>
      </main>
      <footer class="card__footer">
        <div class="card__footerDiv">
          <button class="card__footerBtn" disabled="true">
            <img src="images/urgent.svg" class=" card__footerImg card__footerUrgent" alt="Click here to make this task urgent">
          </button>
          <p class="card__footerMsg">Urgent</p>
        </div>
        <div class="card__footerDiv">
          <button class="button card__footerBtn card__footerDlt">
            <img src="images/delete.svg" class=" card__footerImg card__footerDlt" alt="Click here to delete this task">
          </button>
          <p class="card__footerMsg">Delete</p>
        </div>
      </footer>
    </article>`)
}

function clickHandler(event) {
  deleteToDo(event);
}

function getToDoId(event) {
  return event.target.closest('.card').getAttribute('data-id');
}

function getToDoIndex(id) {
  return ToDos.findIndex(function(arrayObj) {
    return arrayObj.id == parseInt(id);
  })
}

function deleteToDo(event) {
  if (event.target.closest('.card__footerDlt')) {
    var todoId = getToDoId(event)
    var todoIndex = getToDoIndex(todoId)
    event.target.closest('.card').remove()
    ToDos[todoIndex].deleteFromStorage(ToDos, todoIndex)
  }
}






//URGENT CARD STYLES
  // <article class="urgent__card main__article card" data-id="">
  //     <header class="card__header">
  //       <h3 class="card__headerTitle">Todo list title goes here</h3>
  //     </header>
  //     <main class="card__main">
  //       <div class="card__mainDiv">
  //         <img class="card__mainImg" src="images/checkbox.svg" alt="Click here to check off this task!">
  //         <p class="card__mainPara">Task list items go here.</p>
  //       </div>
  //       <div class="card__mainDiv">
  //         <img class="card__mainImg" src="images/checkbox.svg" alt="Click here to check off this task!">
  //         <p class="card__mainPara">Task list items go here.</p>
  //       </div>
  //     </main>
  //     <footer class="card__footer">
  //       <div class="card__footerDiv">
  //         <button class="card__footerBtn" disabled="true">
  //           <img src="images/urgent.svg" class="card__footerImg card__footerUrgent" alt="Click here to make this task urgent">
  //         </button>
  //           <p class="card__footerMsg card__footerMsgUrgent">Urgent</p>
  //       </div>
  //       <div class="card__footerDiv">
  //         <button class="button card__footerBtn">
  //           <img class="card__footerImg card__footerDlt" src="images/delete.svg" alt="Click here to delete this task">
  //         </button>
  //         <p class="card__footerMsg">Delete</p>
  //       </div>
  //     </footer>
  //   </article>