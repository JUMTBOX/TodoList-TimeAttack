const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

inputTask.placeholder = "내용을 입력하세요!";

function mkList() {
  const mkTodo = document.createElement("li");
  todoList.appendChild(mkTodo);
  mkTodo.innerText = `${inputTask.value}`;

  const mkDelBtn = document.createElement("button");
  mkTodo.appendChild(mkDelBtn);
  mkDelBtn.innerText = "삭제";

  const mkCheck = document.createElement("input");
  mkCheck.setAttribute("type", "checkbox");
  mkTodo.prepend(mkCheck);

  function checkConfirm() {
    if (mkCheck.checked === true) {
      mkTodo.style.textDecoration = "line-through";
    } else {
      mkTodo.style.textDecoration = "none";
    }
  }
  mkCheck.addEventListener("click", checkConfirm);

  mkDelBtn.addEventListener("click", (e) => {
    mkTodo.remove();
  });
}

addBtn.addEventListener("click", mkList);
