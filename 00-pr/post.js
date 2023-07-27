// post 목록 화면을 제작 post.html, post.js
// fetch api를 사용하여 http://localhost:8080/posts 주소를 호출한 후

// 배열 목록을 div(카드) 목록으로 표시한다.

//    -----------------              |
//    | 게시자                        |
//    | -------------                |
//    | 1제목(h3)                    |
//    | 본문(p)                      |
//    |  .....                       |
//    |  .....                       |
//    | -------------                |
//    | new Date(생성시간).toString() |
//    -----------------
//
//    -----------------
//    | 게시자         |
//    | ------------- |
//    | 2제목(h3)       |
//    | 본문(p)        |
//    |  .....        |
//    |  .....        |
//    | ------------- |
//    | 생성시간       |
//    -----------------

(async () => {
  const body = document.body;
  const url = "http://localhost:8080/posts";

  // 1. fetch, 서버에서 데이터 가져오기
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);

  // 배열 메서드를 사용하기 위해서...
  const data = Array.from(result);
  console.log(data);

  // 2.-- 데이터배열 반복문으로 html문자열 만들고,
  // 컨테이너에 추가
  data.forEach((item) => {
    const currentDate = new Date();
    
    const template = /*html*/ `
      <div style="width:300px; margin-bottom:3rem;" data-no="${
        item.no
      }">
        <em>${item.creatorName}</em>
        <hr>
        <h3>${item.title}</h3>
        <h1>${item.creatorName}</h1>
        <p>${item.content}</p>
        <hr>
        <small>${item.createdTime}</small>
      </div>
    `;

    body.insertAdjacentHTML(
      "beforeend",
      template
    );
  });
})();
// ------------------------------------------------------------------------
(() => {
  const form = document.forms[0];
  const inputs = form.querySelectorAll("input");
  const textareas = form.querySelectorAll("textarea")
  

  const title = inputs[0];
  const creatorName = inputs[1];
  const content = textareas[0];

  const add = form.querySelector("button");

  add.addEventListener("click", async (e) => {
    e.preventDefault();

    if (title.value === "") {
      alert("제목을 입력해주세요.");
      return;
    }

    if (content.value === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    if (creatorName.value === "") {
      alert("작성자명을 입력해주세요.");
      return;
    }

    const tbody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    // 삭제할 때 사용하려고 데이터 속성을 추가함
    tr.dataset.title = title.value;

    tr.innerHTML = `
    <td>
      ${title.value}
    </td>
    <td>
      ${creatorName.value}
    </td>
    <td>
      ${content.value}
    </td>
    tbody.prepend(tr);
    form.reset();
    </td>`;
  
  const response = await fetch(
    "http://localhost:8080/posts",
    {
      // HTTP Method
      method: "POST",
      // 보낼 데이터 형식은 json
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: title.value,
        content: content.value,
        creatorName: creatorName.value,
      }),
    }
  );
  console.log(response);

  const result = await response.json();
  console.log(result);

  // 화면에 요소를 추가하는 것은 데이처리가 정상적으로 된 다음에

  // --- 3. 어딘가(부모, 다른요소)에 추가한다(append, prepend);
  
  // tbody.prepend(
    
  //     title.value,
  //     content.value,
  //     creatorName.value
    
  // );
  form.reset();
});
  console.log("추가폼 처리 코드");
})();