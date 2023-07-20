const title = document.querySelector('h2');
const list = document.querySelector("ul");
const arrow = document.querySelector("i");

title.addEventListener("click", () => { 
  list.hidden = !list.hidden;
  arrow.style.transform = list.hidden
   ? "rotate(0deg)" 
   : "rotate(90deg)"; // 제어 하려면 인라인 블록 필요
});