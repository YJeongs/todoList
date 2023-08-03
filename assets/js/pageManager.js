
import { UserForm } from "/assets/js/main.js";
import { Task } from "/assets/js/main.js";

export function init() {
  const currentURL = window.location.pathname;
  if (currentURL === "/todoList.html") {
    const task = new Task();
  } else if (currentURL === "/join.html") {
    const userForm = new UserForm();
  }
}
