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

  deleteFromStorage(toDoArray, toDoIndex) {
    toDoArray.splice(toDoIndex, 1)
    this.saveToStorage(toDoArray);
  }

  updateToDo() {

  }

  updateTask() {

  }
}

// class ToDoItem {
//   constructor(obj) {
//     this.id = obj.id;
//     this.title = obj.title;
//     this.completed = obj.completed || false;
//   }
// }