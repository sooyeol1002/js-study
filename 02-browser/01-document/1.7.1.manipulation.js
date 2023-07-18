function createList() {
        var list = document.getElementById("list");

        while (true) {
          var input = prompt("리스트의 내용을 입력하세요:");

          // 사용자가 입력을 취소하면 반복 종료
          if (input === null) {
            break;
          }

          var listItem = document.createElement("li");
          var textNode = document.createTextNode(input);
          listItem.appendChild(textNode);
          list.appendChild(listItem);
        }
      }

      createList();