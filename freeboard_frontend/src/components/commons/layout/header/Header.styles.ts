import styled from "@emotion/styled";

export const Header = styled.div`
  height: 150px;
  display: flex;
  padding-top: 15px;
  padding-left: 20px;
  font-size: 20px;
`;

export const LogWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 10px;
`;

export const LoginButton = styled.button`
  width: 200px;
  height: 45px;
  margin-right: 10px;
  /* background-color: white; */
  border-radius: 15px;
  border: none;
  color: gray;
  :hover {
    cursor: pointer;
  }
`;

export const SignUpButton = styled.button`
  width: 200px;
  height: 45px;
  margin-right: 10px;
  /* background-color: white; */
  border-radius: 15px;
  border: none;
  color: gray;
  :hover {
    cursor: pointer;
  }
`;

export const LogoutButton = styled.button`
  width: 200px;
  height: 45px;
  margin-right: 10px;
  /* background-color: white; */
  border-radius: 15px;
  border: none;
  color: gray;
  :hover {
    cursor: pointer;
  }
`;
