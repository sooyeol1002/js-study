(()=> {
  const button = document.querySelector("button");

 button.addEventListener("click", () => {
        const checkedFruits = document.querySelectorAll(
          "input[name='fruit']:checked"
        );
        const selectedItems = Array.from(checkedFruits).map(
          (check) => check.value
        );
        console.log(selectedItems);

        // 선택한 상품 목록을 출력할 HTML 요소를 생성
        const resultDiv = document.createElement("div");
        resultDiv.innerHTML = "<h2>선택한 상품 목록</h2>";

        if (selectedItems.length === 0) {
          resultDiv.innerHTML += "<p>선택한 상품이 없습니다.</p>";
        } else {
          const ul = document.createElement("ul");
          selectedItems.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
          });
          resultDiv.appendChild(ul);
        }

        // 생성한 HTML 결과를 화면에 추가
        document.body.appendChild(resultDiv);
      });
    })();