const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

function mkList() {
  //입력란이 공백이면 플레이스 홀더를 적용
  if (inputTask.value === "") {
    inputTask.placeholder = "내용을 입력하세요!";
    return;
  }

  //li요소를 생성하고 입력값을 innerText로 받아오고 ul의 자식요소로 넣음
  const mkTodo = document.createElement("li");
  todoList.appendChild(mkTodo);
  mkTodo.innerText = `${inputTask.value}`;

  //button을 생성하고 위에서 생성한 li요소의 자식요소로 할당
  const mkDelBtn = document.createElement("button");
  mkTodo.appendChild(mkDelBtn);
  mkDelBtn.innerText = "삭제";

  //input을 생성하고 checkbox 타입으로 속성을 설정, ul의 자식요소로 들어간 li의 앞으로 넣음
  const mkCheck = document.createElement("input");
  mkCheck.setAttribute("type", "checkbox");
  mkTodo.prepend(mkCheck);

  //checkbox 의 체크여부를 확인하여 그에 따라 li요소의 text-decoration 속성을 변경
  function checkConfirm() {
    if (mkCheck.checked === true) {
      mkTodo.style.textDecoration = "line-through";
    } else {
      mkTodo.style.textDecoration = "none";
    }
  }

  //위에서 정의한 체크여부 검사 함수를 클릭이벤트가 발생하면 실행되도록 checkbox에 적용
  mkCheck.addEventListener("click", checkConfirm);

  //위에서 생성한 delBtn에 클릭이벤트가 발생하면 자신의 부모인 li요소(mkTodo) 자체를 삭제하도록 적용 ??? parentsNode도 가능? ---> 실행 결과 가능하다!
  mkDelBtn.addEventListener("click", (e) => {
    // mkTodo.remove();
    mkDelBtn.parentNode.remove();
  });
}

//클릭이벤트 발생시 mkList 함수 실행
addBtn.addEventListener("click", mkList);
