import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 300px;
`;

const Title = styled.div`
  width: 100%;
  padding-top: 90px;
  padding-bottom: 100px;
  font-size: 90px;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 800px;
  height: 550px;
`;

export default function MyCatPage() {
  const [catUrl, setCatUrl] = useState("");

  useEffect(() => {
    async function myCAT() {
      const result: any = await axios.get("https://thatcopy.pw/catapi/rest/");
      setCatUrl(result.data.url);
      console.log(result.data.url);
    }
    myCAT();
  }, []);
  return (
    <Wrapper>
      <Title>냥</Title>
      <Img src={catUrl} />
    </Wrapper>
  );
}
