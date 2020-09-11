// Something the user does for exemple on click, scroll... can have functionalities and use use js to react to events

const button = document.querySelector("#submit"); // WE SELECT THE SUBMIT BUTTON
const todoList = document.querySelector("#todo-list"); // WE SELECT THE TODO LIST
const todoNr = document.querySelector(".todo-nr"); // WE SELECT THE TODO NR CLASS
const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector(".name-input");

const items = todoList.children; // TO UPDATE DIRECTLY OUR STUFF AND LINK THEITEMS AND THE TODO LIST

// ATTACH A EVENT LISTENER

button.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent to refreash the page
  // Creating the element
  const newItem = document.createElement("li");
  // Adding a class
  newItem.classList.add("item");
  // Adding text to it
  newItem.innerText = nameInput.value; // WE ADD THE TEX WE WANT TO DISPLAY
  todoList.appendChild(newItem); // WE LINK OUR NEW ITEM TO THE TODO LIST
  todoNr.innerText = items.length; // WE ADD A NUMBER TO THE H2
  // Delete the value from the form
  nameInput.value = "";
  // create the element and attaching the listener
  newItem.addEventListener("click", deleteItem);
});

function deleteItem(e) {
  e.stopPropagation(); // Stop bubbling, stop clicking on multiple things we only click on the li
  e.target.remove();
}

todoList.addEventListener("click", function () {
  todoList.classList.toggle("fade");
});

// button.addEventListener("keydown", function (event) {
//   console.log(event);
//   //   mainTitle.style.color = "red";
//   //   mainTitle.style.fontSize = "60px"; // Most of the time css elements are camelcased
//   /* rather than doing the above we will most of the time create class
//   so we can add css which will be easier and cleaner */
//   mainTitle.classList.toggle("spectacular");
// });
