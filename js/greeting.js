// const loginInput = document.querySelector("#login-form input");
// const loginForm = document.querySelector("#login-form");

//1 ) input 으로 받은 user의 value값이 조건의 true/false 인지
// function handleBtnClick() {
//   const username = loginInput.value;
//   // 3. username이 빈칸이면 경고창 출력
//   if (username === "") {
//     alert("write your name");
//   } else if (username.length > 15) {
//     alert("your name is too long");
//   }
// }

// // 1.  loginButton에 대한 click 이벤트는 연결,감지 되야함
// // 2. handleBtnClick()이 실행되며 handleBtnClick의 내부가 보여짐
// loginForm.addEventListener("submit", handleBtnClick);

//2 ) username의 value 값을 input창으로 받고 loginForm 자체를 hidden 시키기
// function subUserName(e) {
//   e.preventDefault();
//   const username = loginInput.value;
//   loginForm.classList.add("hidden");
//   console.log(username);
// }

// loginForm.addEventListener("submit", subUserName);

//3 ) hidden되어 있는  html h1 접근,
// h1 텍스트가 있을 때 '만' 표시되도록 함
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

// 다수로 사용되고 있는 hidden 클래스 이름을 변수로 저장한것
// 변수 이름이 왜 대문자일까 ? 일반적으로 string 만 포함된 변수는
// 대문자로 표기하고, string을 저장하고 싶을 때 사용한다
const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";

function hideUser(e) {
  e.preventDefault(); // 1. 브라우저 기본 동작 막기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USER_NAME, username);
  paintGreetings();
}

loginForm.addEventListener("submit", hideUser);

// 중복되는 값을 함수로 만든 것
function paintGreetings() {
  const username = localStorage.getItem(USER_NAME);
  greeting.innerText = `Hello  ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USER_NAME);

// localStorage에 user 정보가 없을 때
if (saveUsername === null) {
  // form을 보여준다
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  //greeting을 보여준다
  paintGreetings();
}
