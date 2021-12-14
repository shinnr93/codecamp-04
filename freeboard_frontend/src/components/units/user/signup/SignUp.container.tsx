import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import SignUpUI from "./SignUp.presenter";
import { CREATE_USER } from "./SignUp.queries";

export default function SignUpPage() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [myEmail, setMyEmail] = useState("");
  const [myName, setMyName] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myCheckPassword, setMyCheckPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkPasswordError, setCheckPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  function onChangeEmail(event: any) {
    setMyEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  }

  function onChangeName(event: any) {
    setMyName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
  }

  function onChangePassword(event: any) {
    setMyPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }

  function onChangeCheckPassword(event: any) {
    setMyCheckPassword(event.target.value);
    if (event.target.value !== "") {
      setCheckPasswordError("");
    }
  }

  async function onClickRegister() {
    // const { setAccessToken } = useContext(GlobalContext);
    console.log("나리", myCheckPassword);
    if (myEmail === "") {
      setEmailError("이메일이 입력되지 않았습니다");
    }

    if (myName === "") {
      setNameError("이름이 입력되지 않았습니다");
      return;
    }
    if (myPassword === "") {
      setPasswordError("비밀번호가 입력되지 않았습니다");
      return;
    }

    if (myCheckPassword === "") {
      setCheckPasswordError("비밀번호가 입력되지 않았습니다");
      return;
    }

    if (!/\w+@\w+\.\w+/.test(myEmail)) {
      alert("이메일을 정확히 입력해주세요");
      return;
    }

    if (myPassword.length < 4) {
      setPasswordError("비밀번호는 4자리 이상이여야합니다.");
      return;
    }
    if (myPassword !== myCheckPassword) {
      alert("비밀번호가 같지 않습니다");
      return;
    }

    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: myEmail,
            password: myPassword,
            name: myName,
          },
        },
      });
      // } else {
      alert("회원가입에 성공하셨습니다. 로그인을 진행해주세요.");
      router.push(`/cats`);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <SignUpUI
      emailError={emailError}
      passwordError={passwordError}
      checkPasswordError={checkPasswordError}
      nameError={nameError}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeCheckPassword={onChangeCheckPassword}
      onChangeName={onChangeName}
      onClickRegister={onClickRegister}
    />
  );
}
