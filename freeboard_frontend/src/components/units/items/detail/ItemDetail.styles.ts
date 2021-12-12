import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  padding-top: 60px;
  padding-bottom: 100px;

  margin-top: 80px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const WrapperHeader = styled.div`
  width: 792px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserWrapper = styled.div``;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserPhoto = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const UserImage = styled.img``;

export const InfoWrapper = styled.div`
  margin-left: 16px;
`;

export const Seller = styled.div`
  font-family: myfont;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const Date = styled.div`
  font-family: myfont;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #828282;
`;

export const Line = styled.hr`
  width: 792px;
  height: 0px;
  margin-top: 30px;

  background-color: #bdbdbd;
`;

export const WrapperBody = styled.div`
  width: 792px;
  margin-top: 20px;
`;
