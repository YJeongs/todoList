import { UserForm } from "./main.js";
import { Task } from "./main.js";

export function init() {
  if (typeof window !== "undefined") {
    const currentURL = window.location.pathname;
    if (currentURL === "/todoList.html") {
      const task = new Task();
    } else if (currentURL === "/join.html") {
      const userForm = new UserForm();
    }
  }
}
