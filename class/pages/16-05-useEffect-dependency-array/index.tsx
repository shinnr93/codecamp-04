import { useEffect, useState } from "react";

export default function UseEffectDependencyArrayPage() {
  console.log("렌더링시작");

  const [count, setCount] = useState(0);

  // 1번 케이스 componentDidMount! - 최초 1번 실행 (- DidMount)
  //   useEffect(() => {
  //     console.log("최초 한 번 실행됨")
  //   }, [])

  // 2번 케이스 - 의존성배열의 count 감지후 재실행
  //   useEffect(() => {
  //     console.log("count가 변경되면 재실행")
  //   }, [count])

  // 3번 케이스 componentDidMount + state 하면 렌더링이 한 번 더 일어남 - 최초 렌더링 + 1
  //   useEffect(() => {
  //     setCount(100)
  //   }, [])

  // 4번 케이스 - 무한루프
  //   useEffect(() => {
  //     setCount(prev => prev + 1)
  //   }, [count])

  // 5번 케이스
  useEffect(() => {
    setCount(100);
  }, []);

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
    </>
  );
}
