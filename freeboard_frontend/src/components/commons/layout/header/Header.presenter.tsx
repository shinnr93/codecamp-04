import {gql, useQuery} from "@apollo/client"
import { IQuery } from "../../../../commons/types/generated/types";
import {
  Header,
  LogWrapper,
  LoginButton,
  SignUpButton,
} from "./Header.styles";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`

export default function HeaderUI(props) {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN)
  return (
    <Header>
      <div>
        <h1>우공시</h1>
      </div>

      <LogWrapper>
        <LoginButton>환영합니다 {data?.fetchUserLoggedIn.name} 님{" "}</LoginButton>
        <LoginButton onClick={props.onClickLogin}>login</LoginButton>
        <SignUpButton onClick={props.onClickSignUp}>signup</SignUpButton>
      </LogWrapper>
    </Header>
  );
}
