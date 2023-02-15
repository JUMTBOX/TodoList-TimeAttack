// JS 구현
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const content = document.querySelector("#content");
// 클릭 된 요소를 저장하기 위한 전역 변수
let targetEl;

date.placeholder = "날짜를 선택하세요.";

calendar.addEventListener("click", (e) => {
  targetEl = e.target;
  let tag = e.target.tagName;
  console.log(tag);

  if (targetEl.innerText === "") {
    alert("날짜를 제대로 골라.");
  } else if (tag == "P" || tag == "TD") {
    date.value = `2023년 2월 ${targetEl.innerText}일`;
  }
});

function writeSchedule() {
  if (content.value === "") {
    content.placeholder = "내용을 입력하세요";
  } else if (date.value === "") {
    alert("날짜를 선택하세요!");
    return;
  }

  const schedule = document.createElement("div");
  schedule.innerText = content.value;

  let tag = targetEl.tagName;

  if (tag == "P") {
    targetEl.parentNode.appendChild(schedule);
  } else {
    targetEl.appendChild(schedule);
  }

  schedule.addEventListener("click", () => {
    schedule.remove();
    console.log(date.value);
  });
}
