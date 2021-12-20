import { gql, useMutation, useQuery } from "@apollo/client";
import router from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import {
  Header,
  LogWrapper,
  LoginButton,
  SignUpButton,
  LogoutButton,
} from "./Header.styles";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function HeaderUI(props) {
  const [logoutUser] = useMutation(LOGOUT_USER);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  async function onClickLogout() {
    await logoutUser();
    localStorage.removeItem("refreshToken");
    router.reload();
  }
  return (
    <Header>
      <div>
        <h1>우공시</h1>
      </div>

      <LogWrapper>
        <LoginButton>환영합니다 {data?.fetchUserLoggedIn.name} 님 </LoginButton>
        <LoginButton onClick={props.onClickLogin}>login</LoginButton>
        <SignUpButton onClick={props.onClickSignUp}>signup</SignUpButton>
        <LogoutButton onClick={props.onClickLogout}>logout</LogoutButton>
      </LogWrapper>
    </Header>
  );
}
