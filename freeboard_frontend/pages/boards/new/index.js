//export default 해서 만들기 - class 보고 따라만들기
//tip- 껍데기 하나 만들고 게시물 등록 만들고 패딩 주기 아이디 부분 그룹만들고 패딩, 비번 부분 그룹만들고 패딩, 패딩 패딩패딩.. , 사진은 백그라운드컬러 그레이 주고 여백,
//아이디 부분 가로, 높이 설정, but 전체껍데기는 가로 길이만 설정, 높이는 설정ㄴ

import styled from "@emotion/styled";
import {
  NewContent,
  Writer,
  PassWord,
  TitleBox,
  Title,
  Content,
  Enter,
  Bodywrapper,
  IdPassWord,
  WriterWrapper,
  PassWordWrapper,
  ContentBox,
} from "../../../styles/emotion";

export default function BoardsNew() {
  return (
    <div>
      <h1>
        <NewContent>게시물 등록</NewContent>
      </h1>
      <Bodywrapper>
        <IdPassWord>
          <WriterWrapper>
            <Writer>작성자</Writer>
            <input type="text" placeholder="이름을 적어주세요" />
          </WriterWrapper>
          <PassWordWrapper>
            <PassWord>비밀번호</PassWord>
            <input type="text" placeholder="비밀번호를 입력해주세요" />
          </PassWordWrapper>
        </IdPassWord>
        <TitleBox>
          <Title>제목</Title>
          <input type="text" placeholder="제목을 작성해주세요" />
        </TitleBox>
        <div>
          <Content>내용</Content>

          <ContentBox type="text" placeholder="내용을 작성해주세요" />
        </div>
        <div>주소</div>
        <input placeholder="07520" />
        <input type="text" />
        <input type="text" />
        <div>유튜브</div>
        <input type="text" placeholder="링크를 복사해주세요." />
        <div>사진 첨부</div>
        <div></div>
        <div></div>
        <div></div>
        <div>메인 설정</div>
        <input type="radio" name="mainsetting" checked="checked" /> 유튜브
        <input type="radio" name="mainsetting" />
        사진
      </Bodywrapper>
      <Enter type="text" name="등록">
        등록하기
      </Enter>
      {/* <button>등록하기</button> */}
    </div>
  );
}
