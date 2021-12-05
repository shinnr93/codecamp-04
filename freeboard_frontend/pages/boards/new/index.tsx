//export default 해서 만들기 - class 보고 따라만들기
//tip- 껍데기 하나 만들고 게시물 등록 만들고 패딩 주기 아이디 부분 그룹만들고 패딩, 비번 부분 그룹만들고 패딩, 패딩 패딩패딩.. , 사진은 백그라운드컬러 그레이 주고 여백,
//아이디 부분 가로, 높이 설정, but 전체껍데기는 가로 길이만 설정, 높이는 설정ㄴ

// import styled from "@emotion/styled";

import { gql } from "@apollo/client";


const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

export default function BoardsNew() {


  return (
    <>
    <BoardWrite isEdit={false}/>
    </>
  );
}
