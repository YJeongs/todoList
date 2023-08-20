
//일정 관리 클래스
class Task {
    static taskscount = 0; 

    constructor() {
        this.taskInput = document.getElementById("taskInput");
        this.taskList = document.getElementById("taskList");
        this.addBtn = document.getElementById("addButton");

        this.addBtn.addEventListener("click", this.addTask.bind(this));
        this.taskList.addEventListener("click", this.handleTaskListClick.bind(this));
        this.taskInput.addEventListener("keypress", this.handleKeyPress.bind(this));
    }

    //일정 개수 체크
    taskscountcheck() {
        if (Task.taskscount >= 9) { 
            alert("일정은 9개까지만 추가 가능합니다.");
            return true;
        }
        return false;
    }

    //일정 추가
    addTask() {
        if (this.taskscountcheck()) { // 일정 개수 체크
            return;
        }

        const taskText = this.taskInput.value.trim();

        if (taskText === "") {
            alert("할 일을 입력하세요");
            return;
        }

        const newTask = document.createElement("li");
        newTask.textContent = taskText;
        this.taskList.appendChild(newTask);

        const deleteBtn = document.createElement("span");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "x";
        newTask.appendChild(deleteBtn);

        Task.taskscount += 1; // 일정 개수 증가 
        this.taskInput.value = "";
    }

    //일정 삭제
    deleteTask(event) {
        const taskToRemove = event.target.closest("li");
        if (taskToRemove) {
            this.taskList.removeChild(taskToRemove); // 할 일 삭제
            Task.taskscount -= 1; // 일정 개수 감소 
        }
    }

    // 이벤트 핸들러에서 클릭된 요소를 확인하여 deleteBtn인 경우에만 삭제 처리
    handleTaskListClick(event) {
        const target = event.target;
        if (target.classList.contains("delete-btn")) {
            this.deleteTask(event);
        }
    }

    // Enter 키 눌렀을 경우 
    handleKeyPress(event) {
        if (event.key === "Enter") {
            this.addTask();
        }
    }
}

export { Task };
