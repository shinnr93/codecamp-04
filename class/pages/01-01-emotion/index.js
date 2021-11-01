import { MyDiv, MyInput } from "../../styles/emotion";

export default function EmotionPage() {
  //자바스크립트 쓰는 곳

  return (
    //html(엄밀히 말하면 리액트 전용 html(React HTML-'jsx') 쓰는 곳
    <>
      <MyDiv>로그인</MyDiv>

      <div>아이디</div>
      <input type="text" />
      <br />
      <div>비밀번호 </div>
      <input type="text" />
      <div>
        나의이미지 <img src="/images/lotto (1).png" />
      </div>
    </>
  );
}
