import {
  Header,
  LogWrapper,
  SignInButton,
  SignUpButton,
} from "./Header.styles";

export default function HeaderUI(props) {
  return (
    <Header>
      <div>
        <h1>우공시</h1>
      </div>

      <LogWrapper>
        <SignInButton onClick={props.onClickLogin}>login</SignInButton>
        <SignUpButton onClick={props.onClickSignUp}>signup</SignUpButton>
      </LogWrapper>
    </Header>
  );
}
