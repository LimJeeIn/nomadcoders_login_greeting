const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

//toDo인 userInputValue 를 저장한 Array
let toDos = [];

//toDo인 userInputValue 를 저장한 Array는
//텍스트만 저장하는 localStorage에 저장 할수 없기때문에
// toDos array 내용을 localStroge에 넣는 역할 하는 함수를 만듦
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JSON.stringify로 javascript 의 object나 array 등을 string으로 변환 한다
}

//toDo를 삭제하는 역할
function deleteToDo(e) {
  // 어떤게 클릭되었는지 대상(target)의 부모(parentElement)를 알수 있다, 삭제하고 싶은 li를 변수에 할당
  const valueLiTag = e.target.parentElement;
  valueLiTag.remove();
  // 삭제할때 localStorage에 업데이트 해줌
  // 삭제 클릭했던 li의 id를 갖고있는 toDo 를 제외한 다른 id는 남겨야함
  // toDo 는 인자로써 아무거나 넣어도 상관없는 이름일뿐, toDo는 toDos DB에 있는 요소중 하나이다
  //valueLiTag.id 는 string이고 , toDo.id 는 number라서 비교가 안되기 때문에 parseInt로 문자-> 숫자로 바꿔준다
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(valueLiTag.id));
  // toDos DB에서 todo를 지운뒤에 saveToDos()를 한번더 불러야한다
  saveToDos();
}

// toDo를 그리는,생성 역할
// handleSubmit 함수의 user value값을 받는 변수 userInputValue를 인자로 받는다
function paintToDo(userInputValue) {
  //html의 li를 만들어 인자를 전달한다
  const valueLiTag = document.createElement("li");
  // newTodoObj의 객체의 id 를 할당
  valueLiTag.id = userInputValue.id;
  const LiInnerTag = document.createElement("span");
  // span의 텍스트는 handleSubmit에서 온 인자의 텍스트가 된다
  // newTodoObj의 객체의 text 를 할당
  LiInnerTag.innerText = userInputValue.text;
  const buttonTag = document.createElement("button");
  buttonTag.innerText = "❌";
  buttonTag.addEventListener("click", deleteToDo);
  valueLiTag.appendChild(LiInnerTag);
  valueLiTag.appendChild(buttonTag);

  toDoList.appendChild(valueLiTag);
}

function handleSubmit(e) {
  //javascript가 발생한 이벤트는 함수의 첫번째 인자로 준다
  e.preventDefault(); // 엔터를 쳐도 submit 기본동작인 새로고침이 일어나지 않음
  const userInputValue = toDoInput.value;
  // input에 value을 넣을때마다 사라지게 한다
  // userInputValue에 변수가 사라지는것은 아니다
  toDoInput.value = "";
  //paintToDo함수로 toDo 를 생성하기전에 Array를 갖고와서 userInputValue를 넣는다
  // 데이터베이스로 매번 사용자가 적어둔 text 를 push한다
  // 사용자가 삭제하는 것이 어떤것인지 알기 위해 각각의 id값을 갖고있는 것들을 object로 만들어 push 해준다

  const newTodoObj = {
    text: userInputValue,
    id: Date.now(),
  };
  // 이로써 텍스트를 저장하는게 아니라 object로 저장하게 된다
  toDos.push(newTodoObj);
  paintToDo(newTodoObj); // 화면에 toDo를 그려줌
  saveToDos(); //toDos array 내용을 localStroge에 넣는 함수 호출
}

toDoForm.addEventListener("submit", handleSubmit);

//localStroge에서 string형태를 array로 바꾸기 위해
// toDos 를 구해옴
const savedToDosLocal = localStorage.getItem(TODOS_KEY);

//savedToDosLocal가 localStorage 에 존재 한다면
if (savedToDosLocal) {
  // localStorage 에서 온 string 을 살아있는 javascript array로 변하게 함
  const parsedToDos = JSON.parse(savedToDosLocal);
  //새로고침하면 화면에서 이전의 toDo가 날아가므로 그걸 방지하기 위해
  //빈배열 toDos에 parse하여 살아있는 배열이 된 이전의 데이터를  복원하여 할당
  toDos = parsedToDos;

  //javascript 는 array에 있는 각각의 item에 대해 function을 실행 할수 있게 함->forEach
  //parsedToDos 는 array라서 forEach 라는걸 갖고 있다
  //parsedToDos에 있는 각각의 item, 즉  toDo를 생성하는 paintToDo() 를  넣어준다
  // paintToDo는 userInputValue 를 받기 때문에 입력하는 대로 저장 되었기 때문에 forEach 해준다
  parsedToDos.forEach(paintToDo);
}
