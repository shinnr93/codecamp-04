// import {
//   BodyWrapper,
//   Mainwrapper,
//   Title,
//   WriterWrapper,
//   Writer,
//   Date,
//   Image,
//   ImageWrapper,
//   ContentsText,
//   ContentsWrite,
//   ContentsBox,
//   YoutubeWrapper,
//   Youtube,
//   LikeWrapper,
//   LikeCountButton,
//   Count,
//   ThisAddress,
//   Next,
//   List,
//   Previous,
//   RemoteControler,
//   LikeImg,
//   Del

// } from "./BoardDetail.styles";

import { Tooltip } from "antd";
import router from "next/router";
import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <>
      <S.BodyWrapper>
        {/* <FreeBoard>자유게시판</FreeBoard> */}
        {/* <Title>{data ? data.fetchBoard.title : "잠시만 기다려주세요"}</Title> */}
        <S.Mainwrapper>
          <S.Title>{props.dataTitle}</S.Title>
          <S.WriterWrapper>
            <S.Writer>{props.dataWriter}</S.Writer>
            <S.Date>{props.create}</S.Date>
          </S.WriterWrapper>
          <S.ContentsBox>
            <S.ImageWrapper>
              <S.ContentsWrite>Image</S.ContentsWrite>
              <S.Image src="../../../images/제주도2.jpeg" />
            </S.ImageWrapper>
            <S.ContentsText>
              <S.ContentsWrite>Contents</S.ContentsWrite>
              {props.dataContents}
            </S.ContentsText>
            <S.YoutubeWrapper>
              <S.ContentsWrite>Video</S.ContentsWrite>
              <S.Youtube
                src="../../../videoes/제주도.mp4"
                controls
                muted
                autoPlay
              ></S.Youtube>
            </S.YoutubeWrapper>
          </S.ContentsBox>
          <S.Wrapper>
            <S.LikeCountButton onClick={props.likeButton}>
              <S.LikeImg src="../../../images/board/detail/진짜좋아요.png" />
            </S.LikeCountButton>
            <S.DislikeIcon
              src="/images/board/detail/진짜싫어요.png"
              onClick={props.dislikeButton}
            />
            <S.Count>{props.like - props.dislike}</S.Count>
          </S.Wrapper>

          <S.ThisAddress>글 아이디 : {props.dataId}</S.ThisAddress>
          <S.RemoteControler>
            <S.RemoteControler1>
              <S.Previous onClick={props.previous}>이전글</S.Previous>
              <S.List onClick={props.list}>목록</S.List>
              <S.Next onClick={props.next}>다음글</S.Next>
            </S.RemoteControler1>
            <S.RemoteControler2>
              <S.Delete onClick={props.delete}>삭제</S.Delete>
              <S.Edit onClick={props.edit}>수정</S.Edit>
            </S.RemoteControler2>
          </S.RemoteControler>
        </S.Mainwrapper>
      </S.BodyWrapper>
    </>
  );
}
