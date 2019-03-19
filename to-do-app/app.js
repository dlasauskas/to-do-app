function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteToDoList = document.getElementById('deleteToDoList');

  addToDoForm.addEventListener('submit', ( event) => {
    event.preventDefault();
    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //delete list item
    let delete = document.createElement('delete');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    //delete option
    toDoList.appendChild(newLi);
  });
}
window.onload = function () {
  alert("The window has loaded!");
  onReady();
}
