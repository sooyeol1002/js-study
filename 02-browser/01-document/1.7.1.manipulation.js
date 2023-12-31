// function createList() {
//         var list = document.getElementById("list");

//         while (true) {
//           var input = prompt("리스트의 내용을 입력하세요:");

//           // 사용자가 입력을 취소하면 반복 종료
//           if (input === null) {
//             break;
//           }

//           var listItem = document.createElement("li");
//           var textNode = document.createTextNode(input);
//           listItem.appendChild(textNode);
//           list.appendChild(listItem);
//         }
//       }

//       createList();
const rows = 
document.querySelectorAll("tbody > tr");

// sort를 쓰려면 배열로 변환.
Array.from(rows).sort((a, b) => 
a.children[0].textContent.localeCompare(
b.children[0].textContent));

// document.querySelectorAll("tbody").innerHTML = "";

for(let row of sortedRows) {
  document.querySelector("tbody").append(row);
}
// --------------------------------------------------------
// createTree: 객체를 받아서 속성목록으로 li를 만듦
// -> ul에 li들을 붙이고 ul을 container에 붙여야함
// Container: 트리(ul > li, li ...)를 만들어 붙여넣을 요소
// data: 객체 속성 목록으로 ul, li, li..를 만들 값
createTree(container, data);
function createTree(container, data) {
  // 재귀호출(recursive call): 본인함수 다시 호출
  // 재귀호출로 문제를 해결할 때 가장 중요한 포인트
  // 탈출 구문

  let count = 0;
  for(let prop in data) {
    count++;
  }
  if(count > 0) {
  }
  // 객체에 속성이 있으면 처리함, 없으면 x(더이상 재귀호출 안함)
  if(Object.keys(data).length > 0) {

    // ul을 만들고
    const ul = document.createElement("ul");

    // 속성 개수만큼 li들을 만듦
    // ul에 붙이고
    for(let prop in data) {
      const li = document.createElement("li"); // li만듦
      li.textContent = prop; // li 컨텐트로 속성명을 넣어줘야함
      ul.append(li);
      // 속성 객체에 대한 creatrTree 다시 호출
      // 컨테이너를 뭘로 할거냐...
      createTree()
    }

    // ul을 container에 붙임
  }
}