import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 90px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 550px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
  margin-top: 70px;
  margin-bottom: 10px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const Info = styled.input`
  width: 420px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin-top: 20px;
  padding-left: 20px;
`;

export const Error = styled.div`
  color: red;
  margin-left: 10px;
  margin-top: 5px;
`;

export const SignUpButton = styled.button`
  margin-top: 30px;
`;
