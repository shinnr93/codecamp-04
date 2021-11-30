import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCount() {
    // 1. 화살표함수
    // setCount((prev) => prev + 1 ) <-콜백함수
    // (함수안에 함수가 인자로 들어가는 것)래, 그리고 prev는 매개변수여서 꼭 prev 아니어도 됨

    // 2, 그냥함수
    // setCount(function (prev) {
    //   // 로직추가하기
    //   // 로직추가하기

    //   return prev + 1;
    // });

    // 3. 화살표함수에서 매개변수 바꾸기
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>현재카운트 {count}</div>
      <button onClick={onClickCount}>카운트 증가</button>
    </>
  );
}
