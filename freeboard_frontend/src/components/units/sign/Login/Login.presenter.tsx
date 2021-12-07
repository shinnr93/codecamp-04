export default function LoginUI(props) {
  return (
    <>
      아이디
      <input type="text" onChange={props.onChangeMyId} />
      비밀번호
      <input type="password" onChange={props.onChangeMyPassword} />
      <button onClick={props.onClickLogin}>로그인하기</button>
    </>
  );
}
