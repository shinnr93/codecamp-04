import styled from "@emotion/styled";
import { ISubmitButtonProps } from './BoardWrite.types'

export const Bodywrapper = styled.div`
  padding-left: 101px;
  padding-top: 80px;
  padding-right: 103px;
`;

export const NewContent = styled.div`
  padding-left: 512px;
  padding-top: 60px;
  color: black;
  font-size: 40px;
`;

export const TextWrapper = styled.div`
  width: 480px;
  height: 52px;
`;

export const WriterWrapper = styled.div`
  padding-right: 24px;
`;

export const PassWordWrapper = styled.div`
  width: 480px;
  height: 42px;
`;

export const IdPassWord = styled.div`
  display: flex;
`;
export const HeadInput = styled.input`
  width: 486px;
  height: 52px;
`;

export const Writer = styled.div`
  padding-bottom: 16px;
`;

export const PassWord = styled.div`
  padding-bottom: 16px;
`;

export const TitleInput = styled.input`
  width: 996px;
  height: 52px;
`;

export const TitleBox = styled.div``;

export const Title = styled.div`
  padding-top: 40px;
  padding-bottom: 16px;
`;

export const Content = styled.div`
  padding-top: 40px;
  padding-bottom: 16px;
`;

export const ContentBox = styled.textarea`
  width: 996px;
  height: 480px;
`;

export const Home = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const AddressInput = styled.input`
  width: 996px;
  height: 52px;
`;

export const Zipwrapper = styled.div`
  padding-bottom: 16px;
`;

export const ZipCode = styled.input`
  width: 77px;
  height: 52px;
  margin-right: 16px;
  padding-bottom: 16px;
  border: 1px solid #bdbdbd;
`;
export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  padding-bottom: 16px;
  background-color: black;
  cursor: pointer;
  font-size: 16px;
  color: white;
`;

export const Address = styled.input`
  width: 40px;
  border: 1px solid #bdbdbd;
`;
export const Address1 = styled.div`
  padding-bottom: 30px;
  
`;

export const Youtube = styled.div`
  padding-top: 37px;
  padding-bottom: 14.09px;
`;

export const YoutubeLink = styled.input`
  width: 996px;
  height: 45.78px;
`;

export const Photo = styled.div`
  padding-top: 40px;
  padding-bottom: 16px;
`;

export const Picture = styled.div`
  display: flex;
  justify-content: space-between;
  width: 282px;
`;

export const PictureButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
`;

export const Main = styled.div`
  padding-top: 40px;
  padding-bottom: 16px;
`;

export const EnterBox = styled.div`
  padding-left: 510px;
  padding-bottom: 100px;
`;

export const Enter= styled.button`
  /* width: 179px;
  height: 52px;
  background-color: yellow;
  font-size: 16px; */
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  margin-right: 12px;
  background-color: ${(props: ISubmitButtonProps) => props.isActive ? 'yellow' : 'none'};
  
  :hover {
    cursor: ${(props: ISubmitButtonProps) => props.isActive ? 'pointer' : 'default'};
  }
`;

export const ErrorMessage = styled.div`
  color: red;
`;
