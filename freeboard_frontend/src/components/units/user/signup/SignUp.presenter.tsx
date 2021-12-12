import {
  Wrapper,
  Title,
  TextWrapper,
  Info,
  Error,
  SignUpButton,
} from "./SignUp.styles";

export default function SignUpUI(props) {
  return (
    <>
      <Wrapper>
        <Title>회원가입</Title>
        <TextWrapper>
          <Info
            type="text"
            placeholder="이메일을 작성해주세요"
            onChange={props.onChangeEmail}
          />
          <Error>{props.emailError}</Error>

          <Info
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={props.onChangeName}
          />
          <Error>{props.nameError}</Error>
          <Info
            type="password"
            placeholder="비밀번호를 작성해주세요"
            onChange={props.onChangePassword}
          />
          <Error>{props.passwordError}</Error>

          <Info
            type="password"
            placeholder="비밀번호를 확인해주세요"
            onChangeCheckPassword={props.checkPasswordError}
          />
          <SignUpButton onClick={props.onClickSignUp}>
            회원가입하기
          </SignUpButton>
        </TextWrapper>
      </Wrapper>
    </>
  );
}
