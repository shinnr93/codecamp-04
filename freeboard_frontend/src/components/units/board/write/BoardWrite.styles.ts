import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./BoardWrite.types";

export const Bodywrapper = styled.div`
  width: 1200px;
  height: 1700px;
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const NewContent = styled.div`
  padding-left: 600px;
  padding-top: 70px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
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
  border: 1px solid #bdbdbd;
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
  border: 1px solid #bdbdbd;
`;

export const TitleBox = styled.div``;

export const Title = styled.div`
  padding-top: 10px;
  padding-bottom: 16px;
`;

export const Content = styled.div`
  padding-top: 20px;
  padding-bottom: 16px;
`;

export const ContentBox = styled.textarea`
  width: 996px;
  height: 480px;
  border: 1px solid #bdbdbd;
`;

export const Home = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const AddressInput = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;

export const Zipwrapper = styled.div`
  padding-bottom: 16px;
`;

export const ZipCode = styled.input`
  width: 77px;
  height: 52px;
  /* margin-right: 16px; */
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  /* padding-bottom: 16px; */
  margin-left: 16px;
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
  padding-top: 20px;
  padding-bottom: 14.09px;
`;

export const YoutubeLink = styled.input`
  width: 996px;
  height: 53.78px;
  border: 1px solid #bdbdbd;
`;

export const PhotoWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 16px;
  width: 996px;
`;

// export const Picture = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 282px;
// `;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const PictureButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const Main = styled.div`
  padding-top: 40px;
  padding-bottom: 16px;
`;

export const EnterBox = styled.div`
  padding-left: 410px;
`;

export const Enter = styled.button`
  /* width: 179px;
  height: 52px;
  background-color: yellow;
  font-size: 16px; */
  width: 179px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  /* margin-left: 12px;
  margin-right: 12px; */
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "yellow" : "none"};

  :hover {
    cursor: ${(props: ISubmitButtonProps) =>
      props.isActive ? "pointer" : "default"};
  }
`;

export const ErrorMessage = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;
