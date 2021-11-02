import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordcheck, setPasswordcheck] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  function aaa(event) {
    setEmail(event.target.value);
  }

  function bbb(event) {
    setPassword(event.target.value);
  }

  function ccc(event) {
    setPasswordcheck(event.target.value);
  }

  function ddd(event) {
    if (email.includes("@") === false) {
      setEmailError("이메일에 @가 없습니다. 잘못된 이메일이네요.");
    }
    if (password !== passwordcheck) {
      setPasswordError("비밀번호가 같지 않습니다.");
    }
  }

  return (
    <>
      이메일
      <input type="text" onChange={aaa} />
      <div>{emailError}</div>
      비밀번호
      <input type="password" onChange={bbb} />
      비밀번호 확인
      <input type="passwordcheck" onChange={ccc} />
      <div>{passwordError}</div>
      <button onClick={ddd}>가입하기</button>
    </>
  );
}
