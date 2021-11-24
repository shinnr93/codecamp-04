import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router"

export default function MyLifecyclePage() {
    const router = useRouter()
    const inputRef = useRef<HTMLInputElement>(null)
    const [count, setCount] = useState(0);

    // componentDidMount와 동일, []는 의존성 배열(dependency array)
    // 의존성 배열 없으면 뭐 하나라도 바뀌면 다시 실행(class didupdate랑 비슷)
    // dependency array 있으니까 한 번으로 끝,,??? 조건을 넣고 싶으면 디펜더시
    // 어레이에 조건넣으면 됨
    useEffect(() => {
        console.log("마운트됨")
        inputRef.current?.focus()


        // componentWillUpmount와 동일
        return () => {
            console.log("잘가요")
        }
    }, [])

    // componentDidUpdate와 비슷
    // 디펜더시어레이 없으니까 뭐 하나 바뀌면 다시 실행
    useEffect(() => {
        console.log("수정됨")
    })


    function onClickCounter() {
        setCount(prev => prev + 1)
    }

    function onClickMove() {
        router.push("/")
    }

    return (
        <>
          <input type="text" ref={inputRef}/>
          <div>현재카운트: {count}</div>
          <button onClick={onClickCounter}>카운트 올리기</button>
          <button onClick={onClickMove}>페이지 이동하기</button>
        </>
      );
}
