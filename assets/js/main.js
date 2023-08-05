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

// 유효성 검사 클래스
class Valid {
    static isUseridAvailable(usersInfo, userid) {
      return usersInfo.every((user) => user.userid !== userid);
    }
  
    static isPasswordValid(password) {
      return password.length >= 8 && /\d/.test(password) && /\D/.test(password);
    }
  }

// 사용자 정보 클래스
class UserForm {
    constructor() {
        this.usersInfo = []; //id 저장할 배열 생성
        this.firstName = document.getElementById("first-name");
        this.lastName = document.getElementById("last-name");
        this.nickName = document.getElementById("nickname");
        this.idInput = document.getElementById("id");
        this.passwordInput = document.getElementById("password");
        this.registerBtn = document.getElementById("registerButton");
        this.checkBtn = document.getElementById("checkButton");
        this.idmsg = document.getElementById("idmsg");
        this.pwerrormsg = document.getElementById("pwerrormsg");

        this.registerBtn.addEventListener("click", this.registerUser.bind(this));
        this.checkBtn.addEventListener("click", this.idCheck.bind(this));
    }

    reset() {
        this.firstName.value = "";
        this.lastName.value = "";
        this.nickName.value = "";
        this.idInput.value = "";
        this.passwordInput.value = "";
        this.idmsg.textContent = "";
        this.pwerrormsg.textContent = "";
    }

    //아이디 중복 체크 버튼
    idCheck() {
        const userid = this.idInput.value.trim();
        if (userid === "") {
            alert("아이디를 입력해주세요.");
            return;
        }
      
        if (Valid.isUseridAvailable(this.usersInfo, userid)) {
            idmsg.textContent = "사용가능한 아이디 입니다.";
        } else {
            alert("사용할 수 없는 아이디입니다.");
        }
    }
    
    // 회원가입 
    registerUser() {
        const userid = this.idInput.value.trim();
        const password = this.passwordInput.value;
        if (userid === "" || password === "") {
            alert("아이디 또는 비밀번호를 입력해주세요");
            return;
        }
    
        if (!Valid.isUseridAvailable(this.usersInfo, userid)) {
            alert("사용할 수 없는 아이디입니다.");
            return;
        }

        if (!Valid.isPasswordValid(password)) {
            pwerrormsg.textContent = "비밀번호를 다시 입력하세요.";
            alert("비밀번호는 8자 이상 최소 하나의 문자와 하나의 숫자를 포함해야합니다.");
            return;
        }

        this.usersInfo.push({ userid, password }); //배열에 데이터 입력
        alert("회원가입이 완료되었습니다.");
        this.reset(); //입력값 초기화
    }
}

export { UserForm };
export { Task };
import { init } from "./pageManager.js";

init();