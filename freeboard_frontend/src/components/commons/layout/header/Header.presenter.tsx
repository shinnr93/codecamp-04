import {
  Header,
  LogWrapper,
  SignInButton,
  SignUpButton,
} from "./Header.styles";

export default function HeaderUI() {
  return (
    <Header>
      <div>
        <h1>우공시</h1>
      </div>

      <LogWrapper>
        <SignInButton></SignInButton>
        <SignUpButton></SignUpButton>
      </LogWrapper>
    </Header>
  );
}
