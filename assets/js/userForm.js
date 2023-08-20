'use strict';
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
        this.idInput = document.getElementById("id");
        this.passwordInput = document.getElementById("password");
        this.registerBtn = document.getElementById("registerButton");
        this.checkBtn = document.getElementById("checkButton");
        this.idmsg = document.getElementById("idmsg");
        this.pwerrmsg = document.getElementById("pwerrormsg");

        this.registerBtn.addEventListener("click", this.registerUser.bind(this));
        this.checkBtn.addEventListener("click", this.idCheck.bind(this));
    }

    reset() {
        this.firstName.value = "";
        this.lastName.value = "";
        this.idInput.value = "";
        this.passwordInput.value = "";
        this.idmsg.textContent = "";
        this.pwerrmsg.textContent = "";
    }

    //아이디 중복 체크 버튼
    idCheck() {
        const userid = this.idInput.value.trim();
        if (userid === "") {
            alert("아이디를 입력해주세요.");
            return;
        }
      
        if (Valid.isUseridAvailable(this.usersInfo, userid)) {
            this.idmsg.textContent = "사용가능한 아이디 입니다.";
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
            this.idCheck();
            return;
        }

        if (!Valid.isPasswordValid(password)) {
            this.pwerrmsg.textContent = "비밀번호를 다시 입력하세요.";
            alert("비밀번호는 8자 이상 최소 하나의 문자와 하나의 숫자를 포함해야합니다.");
            return;
        }

        this.usersInfo.push({ userid, password }); //배열에 데이터 입력
        alert(`안녕하세요, ${userid}님😊 회원가입이 완료되었습니다.`);
        this.reset(); //입력값 초기화
    }
}

export { UserForm };
