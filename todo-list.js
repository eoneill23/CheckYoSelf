class ToDoList {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.urgent = obj.urgent || false;
    this.tasks = obj.tasks || [];
  }

  saveToStorage(allToDos) {
   var saveToDos = JSON.stringify(allToDos)
   localStorage.setItem('ToDoListArray', saveToDos );
  }

  deleteFromStorage() {

  }

  updateToDo() {

  }

  updateTask() {

  }
}