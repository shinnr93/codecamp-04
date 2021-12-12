import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import SignUpUI from "./SignUp.presenter";
import { CREATE_USER } from "./SignUp.queries";

export default function SignUp() {
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

  function onChangeEmail(event) {
    setMyEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  }

  function onChangeName(event) {
    setMyName(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }

  function onChangePassword(event) {
    setMyPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  }

  function onChangeCheckPassword(event) {
    setMyCheckPassword(event.target.value);
    if (event.target.value !== "") {
      setCheckPasswordError("");
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
    />
  );
}
