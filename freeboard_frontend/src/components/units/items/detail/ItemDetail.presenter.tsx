import {
  Wrapper,
  WrapperHeader,
  UserWrapper,
  UserInfo,
  UserPhoto,
  InfoWrapper,
  Seller,
  Date,
  Line,
  WrapperBody,
  UserImage,
} from "./ItemDetail.styles";

export default function ItemDetailUI(props) {
  return (
    <>
      <Wrapper>
        <WrapperHeader>
          <UserWrapper>
            <UserInfo>
              <UserPhoto>
                <UserImage
                  src={
                    props.data?.fetchUseditem.seller.picture
                      ? `https://storage.googleapis.com/${props.data?.fetchUseditem.seller.picture}`
                      : "/images/photo.png"
                  }
                />
                <InfoWrapper>
                  <Seller>{props.data?.fetchUseditem.seller?.name}</Seller>
                  <Date>
                    Date :{" "}
                    {props.data?.fetchUseditem.createdAt.slice(0, 10) + " "}
                    {props.data?.fetchUseditem.createdAt.slice(11, 19)}
                  </Date>
                  <button onClick={props.onClickPick}>찜하기</button>
                </InfoWrapper>
              </UserPhoto>
            </UserInfo>
          </UserWrapper>
        </WrapperHeader>
        <Line />
        <WrapperBody>
          <div>상품명{props.data?.fetchUseditem.name}</div>
          <div>한줄요약{props.data?.fetchUseditem.remarks}</div>
          <div>내용{props.data?.fetchUseditem.contents}</div>
          <div>가격{props.data?.fetchUseditem.price}</div>
        </WrapperBody>
      </Wrapper>
    </>
  );
}
