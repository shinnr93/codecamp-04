import {
  Bodywrapper,
  Title,
  Id,
  Date,
  Img,
  Contents,
  Youtube,
  Like,
  WriterProfile,
  Mainwrapper,
  Next,
  List,
  Previous,
  Relwrapper,
  LikeImg,
  Del

} from "./BoardDetail.styles";

export default function BoardDetailUI(props){
    return(
        <>
        <Wrapper>
            {/* <FreeBoard>자유게시판</FreeBoard> */}
            {/* <Title>{data ? data.fetchBoard.title : "잠시만 기다려주세요"}</Title> */}
            <Title>{props.dataTitle}</Title>
            <WriterWrapper>
                <Writer>{props.dataWriter}</Writer>
                <WriteDate>{props.create}</WriteDate>
            </WriterWrapper>
            <Contents>
                <ContentsText>
                    <ContentsWrite>
                        - Contents -
                    </ContentsWrite>
                    {props.dataContents}
                    {/* 리액트(React, React.js 또는 ReactJS)는 자바스크립트 라이브러리의 하나로서[2] 사용자 인터페이스를 만들기 위해 사용된다. 페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수된다.[3][4][5]
리액트는 싱글 페이지 애플리케이션이나 모바일 애플리케이션 개발에 사용될 수 있다. 대규모 또는 복잡한 리액트 애플리케이션 개발에는 보통 라우팅, API통신 등의 기능이 요구되는데 리액트에는 기본적으로 제공되지 않기 때문에 추가 라이브러리를 사용해야 한다.[6][7] */}
                </ContentsText>
                <ImageWrapper>
                    <ContentsWrite>
                        - Image -
                    </ContentsWrite>
                    <Image src = "../../../images/좋아요.png" />
                </ImageWrapper>
                <YoutubeWrapper>
                    <ContentsWrite>
                        - Video -
                    </ContentsWrite>
                    <Youtube src = "../../../videoes/제주도.mp4" controls muted autoplay></Youtube>
                </YoutubeWrapper>
            </Contents>
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
                <PreviousButton onClick={props.previous}>←이전글</PreviousButton>
                <NextButton onClick={props.next}>다음글→&nbsp;</NextButton>
                <List>&nbsp;목록</List>
            </RemoteControler>
        </Wrapper>
        </>
    )
}