import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");

  function aaa(event) {
    // event.target // <input type="text" onChange={aaa} /> 태그 전체(value)를 가져옴
    setEmail(event.target.value);
  }

  function bbb(event) {
    setPassword(event.target.value);
  }

  function ccc() {
    console.log("email:", email);
    console.log("password:", password);

    if (email.includes("@") === false) {
      //포트폴리오 만들때 에러메시지는 이메일 창 밑에 빨간색으로 '이메일이 잘못되었습니다.' 뜨게 해야함
      //색깔은 리턴부분에서 이모션으로 바꾸든지 하기
      setEmailError("이메일에 @가 없습니다. 잘못된 이메일이네요.");
    }
  }

  return (
    <div>
      이메일입력 <input type="text" onChange={aaa} />
      <br />
      <div>{emailError}</div>
      비밀번호입력 <input type="password" onChange={bbb} />
      <br />
      <button onClick={ccc}>회원가입</button>
    </div>
  );
}
