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

import * as S from "./BoardDetail.styles"

export default function BoardDetailUI(props){
    return(
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
                        <S.ContentsWrite>
                            {/* 이미지 */}
                        </S.ContentsWrite>
                        {/* <S.Image src = "../../../images/제주도2.jpeg" /> */}
                    </S.ImageWrapper>
                <S.ContentsText>
                    <S.ContentsWrite>
                        {/* 내용 */}
                    </S.ContentsWrite>
                    {props.dataContents}
                </S.ContentsText>
                <S.YoutubeWrapper>
                    <S.ContentsWrite>
                        {/* Video */}
                    </S.ContentsWrite>
                    {/* <S.Youtube src = "../../../videoes/제주도.mp4" controls muted autoPlay></S.Youtube> */}
                </S.YoutubeWrapper>
            </S.ContentsBox>
            <S.LikeWrapper>
                <S.LikeCountButton>
                    {/* <S.LikeImg src = "../../../images/좋아요.png" /> */}
                </S.LikeCountButton>
                <S.Count>
                    
                </S.Count>
            </S.LikeWrapper>
            <S.ThisAddress>
                글 아이디 : {props.dataId}
            </S.ThisAddress>
            <S.RemoteControler>
                <S.Previous onClick={props.previous}>이전글</S.Previous>
                <S.Next onClick={props.next}>다음글</S.Next>
                <S.List onClick={props.list}>목록</S.List>
                <S.Del></S.Del>
            </S.RemoteControler>
            </S.Mainwrapper>
        </S.BodyWrapper>
        </>
    )
}