// 빈 배열로 연락처 목록을 관리합니다.
let contacts = [];

// 새로운 연락처를 추가하는 함수
function addContact() {
  // 입력 필드에서 사용자가 입력한 값을 가져옵니다.
  let contactName = document.getElementById("contactName").value;
  let contactPhone = document.getElementById("contactPhone").value;
  let contactEmail = document.getElementById("contactEmail").value;

  // 모든 필드가 비어있지 않을 경우에만 연락처를 추가합니다.
  if (contactName !== "" && contactPhone !== "" && contactEmail !== "") {
    // 새로운 연락처를 contacts 배열에 추가합니다.
    contacts.push({
      name: contactName,
      phone: contactPhone,
      email: contactEmail,
    });

    // 입력 필드를 초기화합니다.
    document.getElementById("contactName").value = "";
    document.getElementById("contactPhone").value = "";
    document.getElementById("contactEmail").value = "";

    // 변경된 연락처 목록을 다시 표시합니다.
    displayContacts();
  }
}

// 특정 이름의 연락처를 삭제하는 함수
function removeContact() {
  // 삭제할 연락처의 이름을 입력 필드에서 가져옵니다.
  let removeContactName = document.getElementById("removeContactName").value;

  // 입력 필드를 초기화합니다.
  document.getElementById("removeContactName").value = "";

  // contacts 배열에서 해당 이름을 가진 연락처를 찾습니다.
  let indexToRemove = -1;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === removeContactName) {
      indexToRemove = i;
      break;
    }
  }

  // 해당 이름을 가진 연락처가 있을 경우에만 삭제합니다.
  if (indexToRemove !== -1) {
    contacts.splice(indexToRemove, 1);
  }

  // 변경된 연락처 목록을 다시 표시합니다.
  displayContacts();
}

// 연락처 목록을 테이블로 표시하는 함수
function displayContacts() {
  // 연락처를 표시할 테이블을 가져옵니다.
  let contactTable = document.getElementById("contactTable");

  // 기존 내용을 지웁니다.
  contactTable.innerHTML = `
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      `;

  // contacts 배열의 모든 연락처를 순회하며 테이블에 추가합니다.
  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];
    let row = `<tr><td>${contact.name}</td><td>${contact.phone}</td><td>${contact.email}</td></tr>`;
    contactTable.innerHTML += row;
  }
}
