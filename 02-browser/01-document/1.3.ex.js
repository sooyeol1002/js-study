
// let table = document.body.firstElementChild;

// for (let i = 0; i < table.rows.length; i++) {
//   let row = table.rows[i];
//   row.cells[i].style.backgroundColor = 'red';
// }
const tbody = document.querySelector("tbody");

for( let tr of tbody.children) {
  let i = Array.from(tbody.children).indexOf(tr);
  tr.children[i].style.backgroundColor ="red";
  tr.children[i].className = "bg-red";
}