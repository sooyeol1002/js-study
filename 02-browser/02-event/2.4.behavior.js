const input1 = document.querySelector("input:nth-of-type(1)");
const input2 = document.querySelector("input:nth-of-type(2)");

console.log((input1));
console.log((input2));

input2.addEventListener("mousedown", (e) => {});
input2.addEventListener("focus", (e) => {
e.target.value = "";});

document.body.addEventListener("contextmenu", (e) => {
  e.preventDefault();
console.log(e);
confirm("당신은 해커입니까?") && window.close();
});