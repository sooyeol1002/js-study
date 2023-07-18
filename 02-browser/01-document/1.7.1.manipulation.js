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