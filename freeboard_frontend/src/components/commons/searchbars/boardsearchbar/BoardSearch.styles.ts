// import { Input, Space } from 'antd';
import { AudioOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const SearchBar = styled.div`
  width: 776px;
  height: 52px;
  border-radius: 15px;
  /* background-color: #edeae3; */
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 250px;
  margin-top: 50px;
`;

export const AudioOutlinedInput = styled(AudioOutlined)`
  font-size: 30px;
  cursor: pointer;
  :hover {
    color: #5729ff;
  }
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
`;
