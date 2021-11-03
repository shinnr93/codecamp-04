//export default 해서 만들기 - class 보고 따라만들기
//tip- 껍데기 하나 만들고 게시물 등록 만들고 패딩 주기 아이디 부분 그룹만들고 패딩, 비번 부분 그룹만들고 패딩, 패딩 패딩패딩.. , 사진은 백그라운드컬러 그레이 주고 여백,
//아이디 부분 가로, 높이 설정, but 전체껍데기는 가로 길이만 설정, 높이는 설정ㄴ

// import styled from "@emotion/styled";
import { useState } from "react";
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
  HeadInput,
  TitleInput,
  AddressInput,
  ZipCode,
  ZipCodeSearch,
  Zipwrapper,
  Address1,
  Youtube,
  YoutubeLink,
  Photo,
  PictureButton,
  Main,
  EnterBox,
  Home,
  Picture,
  ErrorMessage,
} from "../../../styles/emotion";

export default function BoardsNew() {
  const [mywriter, setMyWriter] = useState("");
  const [mypassword, setPW1] = useState("");
  const [checkwriter, setCheckwriter] = useState("");
  const [checkpw, setCheckpw] = useState("");
  const [checktext, setCheckText] = useState("");
  const [checktitle, setCheckTitle] = useState("");
  const [checkaddress, setCheckAdd] = useState("");
  const [checkaddress2, setCheckAdd2] = useState("");
  const [mytitle, setTitle1] = useState("");
  const [mytext, setText] = useState("");
  const [myadd, setAdd] = useState("");
  const [myadd2, setAdd2] = useState("");

  function write(event) {
    setMyWriter(event.target.value);
    if (event.target.value !== "") {
      setCheckwriter("");
    }
  }

  function pw(event) {
    setPW1(event.target.value);
    if (event.target.value !== "") {
      setCheckpw("");
    }
  }

  function head(event) {
    setTitle1(event.target.value);
    if (event.target.value !== "") {
      setCheckTitle("");
    }
  }

  function innertext(event) {
    setText(event.target.value);
    if (event.target.value !== "") {
      setCheckText("");
    }
  }

  function add(event) {
    setAdd(event.target.value);
    if (event.target.value !== "") {
      setCheckAdd("");
    }
  }

  function add2(event) {
    setAdd2(event.target.value);
    if (event.target.value !== "") {
      setCheckAdd("");
    }
  }

  function join() {
    if (mywriter === "") {
      setCheckwriter("이름을 적어주세요");
    }
    if (mypassword === "") {
      setCheckpw("비밀번호를 적어주세요");
    }

    if (mytitle === "") {
      setCheckTitle("제목을 적어주세요");
    }

    if (mytext === "") {
      setCheckText("내용을 입력해 주세요");
    }

    if (myadd === "") {
      setCheckAdd("주소를 적어주세요");
    }

    if (myadd2 === "") {
      setCheckAdd2("상세 주소를 적어주세요");
    }
  }

  return (
    <div>
      <h1>
        <NewContent>게시물 등록</NewContent>
      </h1>
      <Bodywrapper>
        <IdPassWord>
          <WriterWrapper>
            <Writer>작성자</Writer>
            <HeadInput
              type="text"
              placeholder="이름을 적어주세요"
              onChange={write}
            />
            <ErrorMessage>{checkwriter}</ErrorMessage>
          </WriterWrapper>
          <PassWordWrapper>
            <PassWord>비밀번호</PassWord>
            <HeadInput
              type="text"
              placeholder="비밀번호를 입력해주세요"
              onChange={pw}
            />
            <ErrorMessage>{checkpw}</ErrorMessage>
          </PassWordWrapper>
        </IdPassWord>
        <TitleBox>
          <Title>제목</Title>
          <TitleInput
            type="text"
            placeholder="제목을 작성해주세요"
            onChange={head}
          />
          <ErrorMessage>{checktitle}</ErrorMessage>
        </TitleBox>
        <div>
          <Content>내용</Content>
          <ContentBox
            type="text"
            placeholder="내용을 작성해주세요"
            onChange={innertext}
          />
          <ErrorMessage>{checktext}</ErrorMessage>
        </div>
        <Home>주소</Home>
        <Zipwrapper>
          <ZipCode type="text" placeholder="07520" />
          <ZipCodeSearch>우편번호 검색</ZipCodeSearch>
        </Zipwrapper>
        <Address1>
          <AddressInput type="text" onChange={add} />
        <ErrorMessage>{checkaddress}</ErrorMessage>
        </Address1>
        <AddressInput type="text" onChange={add2} />
        <ErrorMessage>{checkaddress2}</ErrorMessage>
        <Youtube>유튜브</Youtube>
        <YoutubeLink type="text" placeholder="링크를 복사해주세요." />
        <Photo>사진 첨부</Photo>
        <Picture>
          <PictureButton></PictureButton>
          <PictureButton></PictureButton>
          <PictureButton></PictureButton>
        </Picture>
        <Main>메인 설정</Main>
        <input type="radio" name="mainsetting" checked="checked" /> 유튜브
        <input type="radio" name="mainsetting" />
        사진
      </Bodywrapper>
      <EnterBox>
        <Enter type="text" name="등록" onClick={join}>
          등록하기
        </Enter>
      </EnterBox>
      {/* <button>등록하기</button> */}
    </div>
  );
}
