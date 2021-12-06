import { useMutation } from "@apollo/client";
import router from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import SignInUI from "./signIn.presenter";
import { LOGIN_USER } from "./signIn.queries";

export default function SignIn() {
    const {accessToken, setAccessToken} = useContext(GlobalContext) 
  const [myId, setMyId] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeMyId = (event) => setMyId(event.target.value);

  const onChangeMyPassword = (event) => setMyPassword(event.target.value);

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: {
          email: myId,
          password: myPassword,
        },
      });`~`
      localStorage.setItem(
        "accessToken",
        result.data?.loginUser.accessToken || ""
      );
      setAccessToken(result.data?.loginUser.accessToken)
      router.push(`/market/items/list`)
    } catch (error) {
      alert("나리");
    }
  };

  return (
    <SignInUI
      onChangeMyId={onChangeMyId}
      onChangeMyPassword={onChangeMyPassword}
      onClickLogin={onClickLogin}
    />
  );
}
