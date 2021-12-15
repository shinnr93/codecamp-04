import styled from "@emotion/styled";

const Container = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #000;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

const Box1 = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 5px;
  background-color: green;
  scroll-snap-align: start;
`;

const Box2 = styled.div`
  background-color: #fff6be;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 5px;
  scroll-snap-align: start;
`;

const Box3 = styled.div`
  background-color: #ffa1ac;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 5px;
  scroll-snap-align: start;
`;

const Box4 = styled.div`
  background-color: #cbbcf6;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 5px;
  scroll-snap-align: start;
`;

const Box5 = styled.div`
  background-color: red;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 5px;
  scroll-snap-align: start;
`;

const Box6 = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 5px;
  background-color: yellow;
  scroll-snap-align: start;
`;

export default function ScrollSnapPage() {
  return (
    <>
      <Container>
        <Box1>1</Box1>
        <Box2>2</Box2>
        <Box3>3</Box3>
        <Box4>4</Box4>
        <Box5>5</Box5>
        <Box6>6</Box6>
      </Container>
    </>
  );
}
