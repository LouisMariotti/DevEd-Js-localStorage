// local storage

// localStorage.setItem("todo", "feed the cat"); // will stay even if we refreash the page, we have to manually clear it
// localStorage.setItem("todo", "feed the bird"); // ISSUE: going to replace the first one
// localStorage.setItem("todo", "feed the gorilla");

// // localStorage.clear(); // delete the local storage

// //Session storage
// // sessionStorage.setItem("todo", "feeding dog");

// // Getting stuff Back
// const user = localStorage.getItem("user");

// console.log(typeof user);

const todosList = {
  todo1: "feeding the cat",
  todo2: "feeding myself",
  todo3: "feeding the dog",
  todo4: "feeding the kids",
  todo5: "feeding the kids",
  todo4: "feeding the kids",
};

localStorage.setItem("todos", JSON.stringify(todosList)); // Keep the brackets

const retrieved = JSON.parse(localStorage.getItem("todos"));

console.log(retrieved);
