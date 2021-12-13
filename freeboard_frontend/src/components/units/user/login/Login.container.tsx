import { useMutation } from "@apollo/client";
import router from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import LoginUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";

export default function Login() {
  const { accessToken, setAccessToken } = useContext(GlobalContext);
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
      });
      
      // localStorage.setItem(
      //   "accessToken",
      //   result.data?.loginUser.accessToken || ""
      // );

      localStorage.setItem("refreshToken", "true")
      setAccessToken?.(result.data?.loginUser.accessToken || "");
      router.push(`/cats`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <LoginUI
      onChangeMyId={onChangeMyId}
      onChangeMyPassword={onChangeMyPassword}
      onClickLogin={onClickLogin}
    />
  );
}
