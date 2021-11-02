import { useState } from "react";

export default function HelloStatePage() {
  const [qqq, setQqq] = useState("안녕하세요");

    function zzz(){
        setQqq("반갑습니다")
    }

  return (
    <>
      <div>{qqq}</div>
      <button onClick={zzz}>버튼클릭</button>
    </>
  );
}
// 데이터가 바뀌면 알아서 바뀜(화면과 데이터가 연결되어있다)