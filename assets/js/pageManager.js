import { Task } from "./task.js";
import { UserForm } from "./userForm.js";


export function init() {
    if (typeof window !== "undefined") {
      const currentURL = window.location.pathname;
      if (currentURL === "/todoList.html") {
        const task = new Task();
      }
      if (currentURL === "/join.html") {
        const userForm = new UserForm();
      }
    }
}