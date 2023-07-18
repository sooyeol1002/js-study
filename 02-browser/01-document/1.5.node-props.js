// ---------------------- tagName 관련
// const div = document.querySelector("div");
// // 태그명이 대문자로 나옴

// for(let elem of div.children) {
//   console.log(elem.tagName);
//   if (elem.tagName === "P") {
//     elem.ATTRIBUTE_NODE
//     elem.style.backgroundColor = "red";
//   }
// } 
const container = document.querySelector("#counter-container");

const span = container.querySelector("span");
let count = 1; 
setInterval(()=> {
  // span.innerHTML = count;
  // span.textContent =count;

  // 요소의 내부HTML을 변경
  // span.innerHTML = `<strong>${count}</strong>`;
  /// 추가이지만 실제로는 innerHTML 전체를 변경
  // 요소의 내부HTML을 뒤에 추가
  // span.innerHTML += `<strong>${count}</strong>`
  // 요소의 내부HTML을 앞에 추가
  // span.innerHTML = 
  // `<strong>${count}</strong>` + span.innerHTML;
// 요소.insertAdjacentHTML
// 요소의ㅡ 인접한 위치에 html을 추가해라
// (위치, 추가할 HTML)
// 위치:
// afterbegin - 시작태그 바로뒤(첫번쨰 자식)
// beforeend - 끝태그 바로앞(마지막 자식)
// span.insertAdjacentHTML(
//   "afterbegin",
//   `<strong>${count}</strong>`
// ) 

count++;

count > 10 && clearInterval(id);
}, 1000);
// ---------------------- outerHTML과 관련
// outerHTML 본인 태그 포함해서 변경이 일어남
console.log(span.outerHTML);
span.outerHTML = `<strong>${count}</strong>`
console.log(span.outerHTML);

// textContent 관련
// 태그 제외하고 text노드의 data값만 가져올 수 있다
console.log(container.innerHTML);
console.log(container.textContent);

// ---------------------- hidden 관련
// css의 dispaly:none;

// css
// .container( display:flex)

// js
// container.style.display = 'none';
// container.style.display = 'flex';
// container.classList.add('none');
// container.classList.remove('none');

// display: none; -> display: flex(block, inline)
span.hidden = false;

// ---------------------- 그 외 속성 관련
console.log(div.id);

// id나 class로 선택을 하면 어떤 태그인지 잘 몰라
// 태그마다 알맞은 속성에 대한 자동완성 안 됨.
// 일반적인 모든  HTML Element 에 대한 속성만 자동완성
console.log(document.querySelector("input").value);