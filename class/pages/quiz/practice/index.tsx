import styled from "@emotion/styled";

const BackVideo = styled.video`
position: relative;
  right: 0;
  bottom: 0;
  min-width: 50%;
  min-height: 50%;

`;

const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 1000px;
  padding: 20px;
  margin-top: 100px;
`;

export default function VideoPage() {
  return (
    <>
      <BackVideo src="/video/제주도.mp4" autoPlay muted loop></BackVideo>
      <TextWrapper>
        <h1>나리</h1>
        <p>안녕하세요!!!!</p>
      </TextWrapper>
    </>
  );
}
