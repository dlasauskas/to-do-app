h1 {
  color: hsla(0, 0%, 100%, 0.9);
  font-weight: bold;
}
function onReady() {
  const addToDoForm = document.getElementByID('addToDoForm');
  const newToDoText = document.getElementByID('newToDoText');
  const toDoList = document.getElementByID('toDoList');
  const deleteToDoForm = document.getElementByID('deleteToDoForm');

  addToDoForm.addEventListener('submit', () event => {
    event.preventDefault();
    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //delete checkbox
    let checkbox = deleteToDoForm('li');

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
    deleteToDoForm.appendChild(newLi);
  });
}
window.onload = function () {
  alert("The window has loaded!");
  onReady();
}
