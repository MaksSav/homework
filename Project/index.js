const newListInput = document.getElementById("new-list-input");
const newTodoItemInput = document.getElementById("new-todoitem-input");

let selectedTodoList = undefined;
const createNewListObj = function () {
  let newId = 1;
  if (localStorage['lastId']) {
    newId = parseInt(localStorage['lastId']) + 1;
    localStorage.setItem('lastId', newId);
  } else {
    localStorage.setItem('lastId', '1');
  }

  const Obj = {
    id: newId,
    name: newListInput.value,
    todosArr: []
  }

  if (!localStorage['todoLists']) {
    localStorage.setItem('todoLists', JSON.stringify([]));
  }
  const newLists = JSON.parse(localStorage['todoLists']);
  newLists.push(Obj);
  localStorage.setItem('todoLists', JSON.stringify(newLists));
  selectedTodoList = Obj;
  createListBtn(Obj);
  createSelectedList(Obj.id);
}
const addNewTodoItem = function () {
  const newTodoItemObj = {
    name: newTodoItemInput.value,
    status: false
  }

  selectedTodoList.todosArr.push(newTodoItemObj);
  const todoLists = JSON.parse(localStorage['todoLists']);
  todoLists.forEach((element, i) => {
    if (element.id === selectedTodoList.id) {

      todoLists[i].todosArr = selectedTodoList.todosArr;
      localStorage.setItem('todoLists', JSON.stringify(todoLists));
    }
  });

  createSelectedList(selectedTodoList.id);
}
const createListBtn = function (todoList) {
  const todoListsWrapper = document.getElementById("Lists-menu");
  const newButtonId = 'list-id-' + todoList.id;
  const dropdownItem = document.createElement("li");
  dropdownItem.setAttribute("class", "dropdown-item");
  dropdownItem.setAttribute("id", newButtonId);
  dropdownItem.innerHTML = todoList.name;
  todoListsWrapper.appendChild(dropdownItem);
  dropdownItem.addEventListener("click", () => createSelectedList(todoList.id));
}
const deleteTodoItem = function (todoElement) {
  const todosWrapper = document.getElementById('todos-wrapper');
  const index = [...todosWrapper.children].indexOf(todoElement);

  selectedTodoList.todosArr.splice(index, 1);
  todoElement.remove();
  const todoLists = JSON.parse(localStorage['todoLists']);
  todoLists.forEach((el, i) => {
    if (el.id === selectedTodoList.id) {
      todoLists[i] = selectedTodoList;
      localStorage.setItem('todoLists', JSON.stringify(todoLists));
    }
  })
}
const checkTodo = function (todoElement) {
  const todosWrapper = document.getElementById('todos-wrapper');
  const index = [...todosWrapper.children].indexOf(todoElement);
  if (index >= 0) {
    selectedTodoList.todosArr[index].status = !selectedTodoList.todosArr[index].status;
    if (selectedTodoList.todosArr[index].status) {
      todoElement.classList.add('checked-item');
    } else {
      todoElement.classList.remove('checked-item');
    }
    const todoLists = JSON.parse(localStorage['todoLists']);
    todoLists.forEach((el, i) => {
      if (el.id === selectedTodoList.id) {
        console.log(el);
        todoLists[i] = selectedTodoList;
        localStorage.setItem('todoLists', JSON.stringify(todoLists));
      }
    })
  }
}
const loadLocalstorageData = function () {
  let todoLists = JSON.parse(localStorage.getItem('todoLists'));
  if (todoLists) {
    todoLists.forEach(element => {
      createListBtn(element);
    });
    if (todoLists && todoLists.length) {
      createSelectedList(todoLists[0].id);
    }
  }
}
const createSelectedList = function (id) {
  const todoLists = JSON.parse(localStorage['todoLists']);
  todoLists.forEach((element) => {
    if (element.id === id) {
      selectedTodoList = element;
    }
  })
  const listToCreate = selectedTodoList;
  if (document.getElementById("selectedTodoListWrapper")) {
    selectedTodoListWrapper = document.getElementById("selectedTodoListWrapper");
    selectedTodoListWrapper.remove();
  }

  const listDiv = document.getElementById("todo-list");
  const div = document.createElement("div")
  div.setAttribute("id", "selectedTodoListWrapper");
  const h4 = document.createElement("h4");
  h4.innerHTML = listToCreate.name;
  div.appendChild(h4);
  const ul = document.createElement("ul");
  ul.setAttribute("id", "todos-wrapper");

  if (listToCreate.todosArr.length) {
    for (i = 0; i < listToCreate.todosArr.length; i++) {
      const li = document.createElement("li");
      li.innerHTML = listToCreate.todosArr[i].name;
      li.classList.add('todoItem');
      li.classList.add('d-flex');
      li.classList.add('justify-content-between');
      if (listToCreate.todosArr[i].status) {
        li.classList.add('checked-item');
      }
      li.addEventListener('click', () => checkTodo(li));

      const deleteButton = document.createElement('span');
      deleteButton.classList.add('bi');
      deleteButton.classList.add('bi-backspace-fill');
      deleteButton.addEventListener('click', () => deleteTodoItem(li))
      li.appendChild(deleteButton);
      ul.appendChild(li);
    }
  }

  div.appendChild(ul);
  listDiv.appendChild(div);
}


loadLocalstorageData();