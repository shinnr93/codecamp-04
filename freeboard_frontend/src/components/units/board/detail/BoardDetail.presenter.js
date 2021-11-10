import {
  BodyWrapper,
  Mainwrapper,
  Title,
  WriterWrapper,
  Writer,
  Date,
  Img,
  ContentsBox,
  Contents,
  Youtube,
  Like,
  WriterProfile,
  Mainwrapper,
  ThisAddress,
  Next,
  List,
  Previous,
  RemoteControler,
  LikeImg,
  Del

} from "./BoardDetail.styles";

export default function BoardDetailUI(props){
    return(
        <>
        <BodyWrapper>
            {/* <FreeBoard>자유게시판</FreeBoard> */}
            {/* <Title>{data ? data.fetchBoard.title : "잠시만 기다려주세요"}</Title> */}
            <Mainwrapper>
            <Title>{props.dataTitle}</Title>
            <WriterWrapper>
                <Writer>{props.dataWriter}</Writer>
                <Date>{props.create}</Date>
            </WriterWrapper>
            <ContentsBox>
                <ImageWrapper>
                        <ContentsWrite>
                            {/* 이미지 */}
                        </ContentsWrite>
                        <Image src = "../../../images/제주도.png" />
                    </ImageWrapper>
                

                <ContentsText>
                    <ContentsWrite>
                        {/* 내용 */}
                    </ContentsWrite>
                    {props.dataContents}
                </ContentsText>

                <YoutubeWrapper>
                    <ContentsWrite>
                        {/* Video */}
                    </ContentsWrite>
                    <Youtube src = "../../../videoes/제주도.mp4" controls muted autoplay></Youtube>
                </YoutubeWrapper>
            </ContentsBox>
            <LikeWrapper>
                <LikeCountButton>
                    <LikeImg src = "../../../images/좋아요.png" />
                </LikeCountButton>
                <Count>
                    {props.like-props.dislike}
                </Count>
            </LikeWrapper>
            <ThisAddress>
                글 아이디 : {props.dataId}
            </ThisAddress>
            <RemoteControler>
                <Previous onClick={props.previous}>←이전글</Previous>
                <Next onClick={props.next}>다음글→&nbsp;</Next>
                <List>&nbsp;목록</List>
                <Del></Del>
            </RemoteControler>
            </Mainwrapper>
        </BodyWrapper>
        </>
    )
}