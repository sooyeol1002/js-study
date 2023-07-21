(()=> {
  const ageForm = document.querySelector("form");
  const checkedFruits = ageForm.querySelectorAll(
    "input[name='fruit']:checked"
  );
  console.log(checkedFruits);

  // 선택된 값 배열로 변환
  // ['banana', 'kiwi']
  Array.from(checkedFruits).map((check) => check.value);
  console.log(values);

  // const ages = ageForm.querySelectorAll(
  //   "input[name='age']"
  // );
  // console.log(ages);
  // for(let age of ages) {
  //   if (age.checked) {
  //     console.log(age.value);
  //   }
  // }
  // DOM API 탐색해서 라디오 값을 조회
  // 라디오 값: 그룹목록 중에서 선택된 라디오의 값
  // document.forms[0].elements.age

  // console.log(ages.value);
  // const ageForm = document.forms[0];
  // const ages = ageForm.elements["age"]
  // console.log(ages);
});