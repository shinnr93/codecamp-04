import { Wrapper, Title, TextWrapper, Info, LoginButton } from "./Login.styles";

export default function LoginUI(props) {
  return (
    <>
      <Wrapper>
        <Title>로그인</Title>
        <TextWrapper>
          <Info
            type="text"
            placeholder="이메일을 입력해주세요"
            onChange={props.onChangeMyId}
          />
          <Info
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={props.onChangeMyPassword}
          />
          <LoginButton onClick={props.onClickLogin}>로그인하기</LoginButton>
        </TextWrapper>
      </Wrapper>
    </>
  );
}
